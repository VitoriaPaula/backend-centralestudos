import { getCustomRepository } from 'typeorm';
import { Response,Request } from 'express';
import { UserCoursesRepository } from "../repositories/UserCouresRepository";
import { SendEmailController } from './SendEmailController';
import sendEmail from '../services/sendEmail';

class CourseUsersController{
    async create(req:Request,res:Response){

        const { CD_USUARIO,LS_CATEGORIA } = req.body;

        const userCoursesRepository = getCustomRepository(UserCoursesRepository);

        var DS_CATEGORIA = LS_CATEGORIA[1]

        const userrepo = userCoursesRepository.create({CD_USUARIO,DS_CATEGORIA})
        await userCoursesRepository.save(userrepo)
    }
}

export { CourseUsersController };