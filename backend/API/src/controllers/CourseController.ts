import { getCustomRepository } from 'typeorm';
import { Request, Response, response } from 'express';
import { CoursesRepository } from '../repositories/CourseRepository';
class CourseController{
    async create(req: Request,res: Response){
        const { NM_CURSO,URL_CURSO,DS_CURSO,DS_DURACAO,DS_IDIOMA} = req.body;
        
        const courseReposotory = getCustomRepository(CoursesRepository);

        const course = courseReposotory.create({NM_CURSO,URL_CURSO,DS_CURSO,DS_DURACAO,DS_IDIOMA});

        await courseReposotory.save(course);

        return res.status(201).json(course);

    }

    async list(req: Request,res: Response){
        const courseReposotory = getCustomRepository(CoursesRepository);
        const allCourses = await courseReposotory.find();

        return res.json(allCourses);
    }
}

export { CourseController };