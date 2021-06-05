import * as request from "request";
import { Course } from "../models/Course";

export class microsoftApiService {
  getCourses(cb: (course: Course) => any) {
    request.get(
      "https://docs.microsoft.com/api/learn/catalog",
      (error: any, response: any, body: any) => {
        const res: any = JSON.parse(body);
        const modules: any[] = res.modules;
        modules.forEach(function (module) {
          let course = new Course(module);
          cb(course);
        });
      }
    );
  }
}
