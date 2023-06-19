import axios from "axios";
import {IComment, IComments} from "../types/type";
import {Dispatch} from "react";

const getComments = () => {
    return axios.get<IComments>('https://dummyjson.com/comments')
        .then(response => response.data)
}

export const fetchComments = async (setState: Dispatch<IComment[]>) => {
    try {
        await getComments()
            .then(response => setState(response.comments))
    } catch (error) {
        console.error(error)
    }
}