import { Router } from "express";
import { CourseController } from "./controllers/CourseController";
import { UserController } from "./controllers/UserController";


const router = Router();

const userController = new UserController();
const courseController = new CourseController();

router.post("/user",userController.create);
router.post("/course",courseController.create);

export { router }