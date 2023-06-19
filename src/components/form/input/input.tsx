import React, {Dispatch, FC, useEffect} from 'react';
import s from './input.module.css'

interface InputProps{
    inputValue: string
    setInputValue: Dispatch<string>
}

const Input:FC<InputProps> = ({inputValue, setInputValue}) => {


    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        setInputValue(value)
        localStorage.setItem('inputValue', JSON.stringify(value));
    }


    useEffect(() => {
        const value = localStorage.getItem('inputValue')

        if (value) {
            setInputValue(JSON.parse(value))
        }
        console.log(value)
    }, [])

    console.log(inputValue)
    return (
        <div>
            <textarea
                value ={inputValue}
                onChange = {onChange}
                placeholder={'lorem'}
                className={s.input}
            />
        </div>
    );
};

export default Input;