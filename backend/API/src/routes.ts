import { Router } from "express";
import { CourseController } from "./controllers/CourseController";
import { UserController } from "./controllers/UserController";


const router = Router();

const userController = new UserController();
const courseController = new CourseController();

router.post("/usuario",userController.create);
router.get("/usuario/id",userController.filterUserID);
router.get("/usuario/email",userController.filterUserEmail);
router.get("/login",userController.validaLogin);

router.post("/curso",courseController.create);
router.post("/cursos",courseController.createMany);

router.get("/cursos",courseController.list);
router.get("/cursos/categoria",courseController.listFilterCategory);
router.get("/cursos/site",courseController.listFilterSite);
router.get("/cursos/linguagem",courseController.listFilterLanguage);
router.post("/cursos/filtro",courseController.listFilter);
export { router }