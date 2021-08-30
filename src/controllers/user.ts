import { Request, Response } from "express";

const users: Object = [
    { id: 1, name: 'allan' }, { id: 2, name: 'joão' }, { id: 3, name: 'ercio'}
]

export default class UserController{    
    getUsers(request: Request, response: Response){
        return response.status(200).send(users);
    }
}
