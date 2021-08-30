import { Router } from "express";
const routes = Router();
import userController from './controllers/user';

routes.get('/', userController.getUsers);

export default routes;