import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { Response,Request } from 'express';
import { UserCoursesRepository } from "../repositories/UserCouresRepository";
import sendEmail from '../services/sendEmail';
import { UsersRepository } from '../repositories/UsersRepository';
import { CourseController } from './CourseController';
import { Course } from '../models/Course';
import { User } from '../models/User';


class UserCoursesController{
    async create(req:Request,res:Response){

        const { CD_USUARIO } = req.body;
        const body = req.body
        //console.log(body.LS_CATEGORIAS)

        const userCoursesRepository = getCustomRepository(UserCoursesRepository);
        const userRepository = getCustomRepository(UsersRepository);

        const user = await userRepository.findOne({CD_USUARIO: CD_USUARIO});
        const userExists = await userCoursesRepository.findOne( { where: { CD_USUARIO: CD_USUARIO }});

        if(userExists)
        {
            userCoursesRepository.delete({CD_USUARIO : CD_USUARIO});
        }
        else{
            await sendEmail.executeWelcomeNewslleter(user.DS_EMAIL,"Bem vindo a newsletter!",user.NM_USUARIO)
        }

       body.LS_CATEGORIAS.forEach(async (cat) =>  {
       const userrepo = userCoursesRepository.create({CD_USUARIO,DS_CATEGORIA:cat})
           await userCoursesRepository.save(userrepo)
           console.log(userrepo);
       });

       return res.json({"ok":true});
    }


    async servicoNewsletter(){
        const courseController = new CourseController;
        const userCoursesController = new UserCoursesController;

        const cursos = await courseController.listNew();
        const usuarios = await userCoursesController.listAllUsers();
        
        //console.log(usuarios);
        var curso: Course
        var usuario: User

        (await usuarios).forEach(async function (usuario, indice, usuarios) {
            console.log(usuario.CD_USUARIO);
            var Naomandou = true;
            const categorias = userCoursesController.listCatUser(usuario.CD_USUARIO);
            (await categorias).forEach(async function (categoria, indice, categorias) {

                (await cursos).forEach(async function (curso, indice, cursos){
                    if (curso.DS_CATEGORIA == categoria.DS_CATEGORIA && Naomandou){
                        await sendEmail.execEmailNews(usuario.CD_USUARIO, curso.CD_CURSO);
                        Naomandou =false;
                    }
                   });
            
            })
        })
    }
    async listAllUsers() {
        //Todos os usuarios que tem news letter
        const userCoursesRepository = getCustomRepository(UserCoursesRepository);
        const users = await userCoursesRepository
                    .createQueryBuilder("user_courses").select("DISTINCT CD_USUARIO").getRawMany();
        console.log("listou");
        
        return users;
    }
    async listCatUser(CD_USUARIO: string){
        const userCoursesRepository = getCustomRepository(UserCoursesRepository);
        const categorias = await userCoursesRepository.find({where:{CD_USUARIO:CD_USUARIO}});
        return categorias;

    }
}

export { UserCoursesController };