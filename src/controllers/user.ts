import { Request, Response } from "express";

const users: Object = [
    { id: 1, name: 'allan' }, { id: 2, name: 'joão' }, { id: 3, name: 'ercio'}
]

const userController = {
    
    getUsers(request: Request, response: Response): Response{
        return response.status(200).send(users);
    }

}

export default userController;