import { createQueryBuilder, getConnection, getCustomRepository } from 'typeorm';
import { Request, Response, response, json } from 'express';
import { CoursesRepository } from '../repositories/CourseRepository';
class CourseController{
    
    async create(req: Request,res: Response){
        const { NM_CURSO,URL_CURSO,DS_CURSO,DS_DURACAO,DS_IDIOMA,DS_CATEGORIA,DS_SITE,DS_LINGUAGEM } = req.body;
        
        const courseRepository = getCustomRepository(CoursesRepository);

        const nmt = NM_CURSO + "";

        console.log(nmt)
        
        const course = courseRepository.create({NM_CURSO,URL_CURSO,DS_CURSO,DS_DURACAO,DS_IDIOMA,DS_CATEGORIA,DS_SITE,DS_LINGUAGEM});

        await courseRepository.save(course);

        return res.status(201).json(course);

    }

    createMany(req: Request,res: Response) {
        const cursos = req.body;

        return res.json(cursos);

    }

    async list(req: Request,res: Response){
        const courseRepository = getCustomRepository(CoursesRepository);
        const allCourses = await courseRepository.find();

        return res.json(allCourses);
    }

    async listFilterCategory(req: Request,res: Response){
        const { categoria } = req.body;

        const courseRepository = getCustomRepository(CoursesRepository);
        const courseFilterCategory = await courseRepository.find({where: { DS_CATEGORIA: categoria}});
        
        return res.json(courseFilterCategory);
    }

    async listFilterSite(req: Request,res: Response){
        const { site } = req.body;

        const courseRepository = getCustomRepository(CoursesRepository);
        const courseFilterSite = await courseRepository.find({where: { DS_SITE: site}});
        
        return res.json(courseFilterSite);
    }

    async listFilterLanguage(req: Request,res: Response){
        const { linguagem } = req.body;

        const courseRepository = getCustomRepository(CoursesRepository);
        const courseFilterLinguagem = await courseRepository.find({where: { DS_LINGUAGEM: linguagem}});
        
        return res.json(courseFilterLinguagem);
    }

    async listFilter(req: Request,res: Response){
        var { categoria, site , linguagem} = req.body;

        if(categoria == "")
        {
            categoria = null;
        }
        if(site == "")
        {
            site = null;
        }
        if(linguagem == "")
        {
            linguagem = null;
        }
        const courseRepository = getCustomRepository(CoursesRepository);
        const courses = await courseRepository.createQueryBuilder("courses").where("courses.DS_CATEGORIA = :DS_CATEGORIA",{DS_CATEGORIA:categoria}).orWhere("courses.DS_SITE = :DS_SITE",{DS_SITE:site}).orWhere("courses.DS_LINGUAGEM = :DS_LINGUAGEM",{DS_LINGUAGEM:linguagem}).getMany();
        
        return res.json(courses);

    }

}

export { CourseController };