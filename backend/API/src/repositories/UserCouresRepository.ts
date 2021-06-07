import { EntityRepository, Repository } from "typeorm";
import { UserCourses } from "../models/UserCourses";

@EntityRepository (UserCourses)
 class UserCoursesRepository extends Repository<UserCourses>{}
 
 export{UserCoursesRepository}