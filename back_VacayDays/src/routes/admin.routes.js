import { Router } from "express";

import userController from "./../controllers/user.controller";
import vacationRequestController from "./../controllers/vacation-request.controller";
import authMiddleware from "../middleware/auth.middleware";

const RouteAdmin = Router()

RouteAdmin.get("/user" ,  authMiddleware, userController.GetAll);
RouteAdmin.post("/user" , authMiddleware, userController.Create);
RouteAdmin.get("/user:id" , authMiddleware, userController.GetById);
RouteAdmin.put("/user:id" , authMiddleware, userController.Update);
RouteAdmin.delete("/user:id" , authMiddleware, userController.Delete);

RouteAdmin.get("/vacationRequest",authMiddleware,vacationRequestController.GetAll);
RouteAdmin.post("/vacationRequest",authMiddleware,vacationRequestController.Create);
RouteAdmin.get("/vacationRequest:id",authMiddleware,vacationRequestController.GetById);
RouteAdmin.get("/vacationUser:userId",authMiddleware,vacationRequestController.GetByUserId);
RouteAdmin.put("/vacationRequest:id",authMiddleware,vacationRequestController.Update);
RouteAdmin.delete("/vacationRequest:id",authMiddleware,vacationRequestController.Delete);

// RouteAdmin.get("/vacationRequest", authMiddleware,vacationRequestController.GetAll);
// RouteAdmin.post("/vacationRequest", authMiddleware,vacationRequestController.Create);
// RouteAdmin.get("/vacationRequest:id", authMiddleware,vacationRequestController.GetById);
// RouteAdmin.get("/vacationUser:userId", authMiddleware,vacationRequestController.GetByUserId);
// RouteAdmin.put("/vacationRequest:id", authMiddleware,vacationRequestController.Update);
// RouteAdmin.delete("/vacationRequest:id", authMiddleware,vacationRequestController.Delete);

export default RouteAdmin;