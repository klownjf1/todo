interface IUser{
    id: number,
    username: string
}

export interface IComment {
    id: number,
    body: string,
    postId: number
    user: IUser
}

export interface IComments {
    comments: IComment[],
    total: number,
    skip: number,
    limit:number
}
