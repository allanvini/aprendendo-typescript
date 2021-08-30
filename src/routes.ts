import { Router } from "express";
const routes = Router();

import UserController from "./controllers/user";

const userController = new UserController();

const test: UserController = new UserController(); // Aqui criamos um tipo de variavel conforme a classe (igual em linguagens fortemente tipadas)

routes.get('/', userController.getUsers)

export default routes;