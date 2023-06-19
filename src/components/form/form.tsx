import React, {FC, useEffect, useState} from 'react';
import {fetchComments} from "../../api/api";
import {IComment} from "../../types/type";
import s from './form.module.css'
import Input from './input/input';

const Form:FC = () => {

    const [state, setState] = useState<IComment[] | null | undefined>([])
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        fetchComments(setState)
    }, [])

    const onDeleteComment = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setState(prevState =>
            prevState?.filter(comment => comment.id !== id)
        )
    }

    const onAddComment = () => {
        const obj = {
            "id": Math.random(),
            "body": inputValue,
            "postId": Math.random(),
            "user": {
                "id": 70,
                "username": "Test task"
            }
        }
        if (inputValue !== '') {
            setState((prevState) => [...prevState ?? [], obj]);
            setInputValue('')
            localStorage.setItem('inputValue', JSON.stringify(''));
        }

    }


    const comments = state?.map(comment =>
        <div key={comment.id} className={s.form} >
            <p className={s.form_username}>{comment.user.username}</p>
            <p className={s.form_body}>{comment.body}</p>
            <button
                onClick={(e) => onDeleteComment(e, comment.id)}
                className={s.btn_del}
            >
                X
            </button>
            
        </div>
    )

    return (
        <div>
            <div className={s.input_form}>
                <Input inputValue = {inputValue} setInputValue = {setInputValue}/>
                <button onClick={onAddComment} className={s.btn_add}>Add</button>
            </div>

            {comments}
        </div>
    );
};

export default Form;