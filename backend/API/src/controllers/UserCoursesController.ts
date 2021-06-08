import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { Response,Request } from 'express';
import { UserCoursesRepository } from "../repositories/UserCouresRepository";
import sendEmail from '../services/sendEmail';
import { UsersRepository } from '../repositories/UsersRepository';


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
}

export { UserCoursesController };