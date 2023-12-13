import { Router } from "express";

import userController from "./../controllers/user.controller";
import vacationRequestController from "./../controllers/vacation-request.controller";

const RouteAdmin = Router()

RouteAdmin.get("/user", userController.GetAll);
RouteAdmin.post("/user", userController.Create);
RouteAdmin.get("/user:id", userController.GetById);
RouteAdmin.put("/user:id", userController.Update);
RouteAdmin.delete("/user:id", userController.Delete);

RouteAdmin.get("/vacationRequest", vacationRequestController.GetAll);
RouteAdmin.post("/vacationRequest", vacationRequestController.Create);
RouteAdmin.get("/vacationRequest:id", vacationRequestController.GetById);
RouteAdmin.put("/vacationRequest:id", vacationRequestController.Update);
RouteAdmin.delete("/vacationRequest:id", vacationRequestController.Delete);

export default RouteAdmin;