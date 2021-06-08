import { Router } from "express";
import { CourseController } from "./controllers/CourseController";
import { CourseUsersController } from "./controllers/CourseUsersController";
import { SendEmailController } from "./controllers/SendEmailController";
import { UserController } from "./controllers/UserController";
import sendEmail from "./services/sendEmail";


const router = Router();

const userController = new UserController();
const courseController = new CourseController();
const sendEmailController = new SendEmailController();
const courseUsersController = new CourseUsersController()
router.post("/usuario",userController.create);
router.get("/usuario/id",userController.filterUserID);
router.get("/usuario/email",userController.filterUserEmail);
router.post("/login",userController.validaLogin);

router.post("/curso",courseController.create);
router.post("/cursos",courseController.createMany);

router.get("/cursos",courseController.list);
router.get("/cursos/categoria",courseController.listFilterCategory);
router.get("/cursos/site",courseController.listFilterSite);
router.get("/cursos/linguagem",courseController.listFilterLanguage);

router.post("/cursos/filtro",courseController.listFilter);
router.post("/usuarioCurso",courseUsersController.create)
//router.post("/email",sendEmailController.exec);

export { router }