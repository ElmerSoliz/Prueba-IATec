import { Router } from "express";

import authController from "./../controllers/auth.controller";

const RouteAuth = Router()

RouteAuth.post("/login", authController.login);
RouteAuth.post("/register", authController.register);
RouteAuth.post("/logout", authController.logout);

export default RouteAuth;