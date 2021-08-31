import { Router } from "express";
const routes = Router();
import ClientController from './controllers/client';

routes.get('/', ClientController.getAllClients);
routes.post('/', ClientController.createNewClient);

export default routes;
