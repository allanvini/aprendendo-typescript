import { Request, Response } from 'express';
import ClientSchema from '../schemas/client';

class ClientController {

    public async getAllClients(request: Request, response: Response): Promise<Response> {
        const users = await ClientSchema.find({});
        if (users.length > 0) {
            return response.status(200).send(users);
        }
        return response.status(404).send({ users });
    }

    public async createNewClient(request: Request, response: Response): Promise<Response> {
        const params = request.body;

        try {
            const newClient = await ClientSchema.create(
                {
                    name: params.name,
                    email: params.email,
                    password: params.password,
                    zoomCredentials: {
                        zoomEmail: params.zoomEmail,
                        zoomJwtApiKey: params.zoomJwtApiKey,
                        zoomJwtApiSecret: params.zoomJwtApiSecret,
                        zoomJwtToken: params.zoomJwtToken
                    }
                }
            )
            return response.status(201).send(newClient);
        } catch {
            return response.status(500).send({ error: 'something went wrong, please try again later' });
        }

    }

}

export default new ClientController();