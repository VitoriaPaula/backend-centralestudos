import { Router } from "express";
import { CourseController } from "./controllers/CourseController";
import { UserController } from "./controllers/UserController";


const router = Router();

const userController = new UserController();
const courseController = new CourseController();

router.post("/usuario",userController.create);

router.post("/curso",courseController.create);
router.post("/cursos",courseController.createMany);
router.get("/cursos",courseController.list);

router.get("/cursos/categoria",courseController.listFilterCategory)

export { router }