import { getCustomRepository } from "typeorm";
import { Request, Response} from "express";
import { CoursesRepository } from "../repositories/CourseRepository";
import { Course } from "../models/Course";
import { microsoftApiService } from "../services/microsoftApiService";
class CourseController {
  async create(req: Request, res: Response) {
    const {
      NM_CURSO,
      URL_CURSO,
      DS_CURSO,
      DS_DURACAO,
      DS_IDIOMA,
      DS_CATEGORIA,
      DS_LINGUAGEM,
      URL_IMAGEM,
    } = req.body;

    const courseRepository = getCustomRepository(CoursesRepository);

    const nmt = NM_CURSO + "";

    const course = courseRepository.create({
      NM_CURSO,
      URL_CURSO,
      DS_CURSO,
      DS_DURACAO,
      DS_IDIOMA,
      DS_CATEGORIA,
      DS_LINGUAGEM,
      URL_IMAGEM,
    });

    await courseRepository.save(course);

    return res.status(201).json(course);
  }

  createMany(req: Request, res: Response) {
    let svc = new microsoftApiService();
    const courseRepository = getCustomRepository(CoursesRepository);
    let URL_CURSO: string;

    svc.getCourses(async (course: Course) => {
      URL_CURSO = course.URL_CURSO;
      const courseAlreadyExists = await courseRepository.findOne({ URL_CURSO });

      if (!courseAlreadyExists) {
        await courseRepository.save(course);
      }
    });
    return res.status(201);
  }
  async list(req: Request, res: Response) {
    const courseRepository = getCustomRepository(CoursesRepository);
    const allCourses = await courseRepository.find();

    return res.json(allCourses);
  }

  async listFilterCategory(req: Request, res: Response) {
    const { CATEGORIA } = req.body;

    const courseRepository = getCustomRepository(CoursesRepository);
    const courseFilterCategory = await courseRepository.find({
      where: { DS_CATEGORIA: CATEGORIA },
    });

    return res.json(courseFilterCategory);
  }

  async listFilterSite(req: Request, res: Response) {
    const { SITE } = req.body;

    const courseRepository = getCustomRepository(CoursesRepository);
    const courseFilterSite = await courseRepository.find({
      where: { DS_SITE: SITE },
    });

    return res.json(courseFilterSite);
  }

  async listFilterLanguage(req: Request, res: Response) {
    const { LINGUAGEM } = req.body;

    const courseRepository = getCustomRepository(CoursesRepository);
    const courseFilterLinguagem = await courseRepository.find({
      where: { DS_LINGUAGEM: LINGUAGEM },
    });

    return res.json(courseFilterLinguagem);
  }

  async listFilter(req: Request, res: Response) {
    var { CATEGORIA, SITE, LINGUAGEM } = req.body;

    if (CATEGORIA == "") {
      CATEGORIA = null;
    }
    if (SITE == "") {
      SITE = null;
    }
    if (LINGUAGEM == "") {
      LINGUAGEM = null;
    }
    const courseRepository = getCustomRepository(CoursesRepository);
    const courses = await courseRepository
      .createQueryBuilder("courses")
      .where("courses.DS_CATEGORIA = :DS_CATEGORIA", {
        DS_CATEGORIA: CATEGORIA,
      })
      .orWhere("courses.DS_SITE = :DS_SITE", { DS_SITE: SITE })
      .orWhere("courses.DS_LINGUAGEM = :DS_LINGUAGEM", {
        DS_LINGUAGEM: LINGUAGEM,
      })
      .getMany();
      //console.log(courses)
    return res.json(courses);
  }

  async listNew() {
    var DATA = new Date(new Date().getTime().valueOf() - 1000 * 60 * 60 * 21);
    console.log(DATA);
    const courseRepository = getCustomRepository(CoursesRepository);
    const courses = await courseRepository
      .createQueryBuilder("courses")
      .where("courses.CREATED_AT > :DATA", { DATA: DATA })
      .getMany();
    //console.log(courses);
    return courses;
  }

  
}

export { CourseController };
