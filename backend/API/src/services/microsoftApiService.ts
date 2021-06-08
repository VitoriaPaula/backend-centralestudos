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

  getUdemy(cb: (course: Course) => any) {
    const modules: any[] = [
      {
        summary:
          "Aprenda os principais recursos do framework de forma direta à partir da construção de uma aplicação.",
        products: ["andular", "azure-stack-edge", "azure-stack-hub"],
        title: "Angular 9 - Essencial",
        duration_in_minutes: 392,
        icon_url:
          "https://import.cdn.thinkific.com/220759/VcZRU85Tqew44oSvSRqu_Angular.png",
        locale: "pt-br",
        url: "https://www.cod3r.com.br/courses/angular-9-essencial",
      },
      {
        summary:
          "Curso SUPER objetivo te ensinando como construir um Cadastro completo em Flutter! CRUD... Create, Read, Update e Delete.",
        products: ["flutter", "azure-stack-edge", "azure-stack-hub"],
        title: "Flutter - Desenvolva um Cadastro Completo [2020]",
        duration_in_minutes: 369,
        icon_url:
          "https://import.cdn.thinkific.com/220759/C4aMT1zATUyG4ZSQbgY0_flutter.jpg",
        locale: "pt-br",
        url: "https://www.cod3r.com.br/courses/flutter-desenvolva-um-cadastro-completo",
      },
      {
        summary:
          "Aprenda os fundamentos de React Native e crie um cadastro completo do zero.",
        products: ["react-native", "azure-stack-edge", "azure-stack-hub"],
        title: "React Native com Hooks e Context API - Cadastro Completo!",
        duration_in_minutes: 454,
        icon_url:
          "https://import.cdn.thinkific.com/220759/K9OgL3epTrnUIv2DEJpq_reactfree.jpg",
        locale: "pt-br",
        url: "https://www.cod3r.com.br/courses/react-native-crud",
      },
      {
        summary:
          "Domine Função em JavaScript! Conteúdo essencial para todos os desenvolvedores!",
        products: ["python", "azure-stack-edge", "azure-stack-hub"],
        title: "Fundamentos de JavaScript Funcional",
        duration_in_minutes: 398,
        icon_url:
          "https://import.cdn.thinkific.com/220759/O01KkXLSJGrvhuaitEX0_JS-fn%20%281%29.png",
        locale: "pt-br",
        url: "https://www.cod3r.com.br/courses/javascript-funcional-fundamentos",
      },
      {
        summary:
          "Aprenda os principais conceitos de Python em um curso rápido e objetivo! Módulos, Operadores, Função, Classe e mais!",
        products: ["python", "azure-stack-edge", "azure-stack-hub"],
        title: "Python 3 - Curso Rápido [2020]",
        duration_in_minutes: 480,
        icon_url:
          "https://import.cdn.thinkific.com/220759/IQfoZp6DSrZRncRfdElW_Thumbnails%20%289%29.png",
        locale: "pt-br",
        url: "www.udemy.com/course/unreal-engine-introducao/",
      },
      {
        summary:
          "Algumas dicas de temas, recursos, plugins e configuração para você melhorar o seu fluxo de trabalho nessa ferramenta. Também é apresentado como integrar o VSCode com o ESLint do Javascript.",
        products: ["vscode", "azure-stack-edge", "azure-stack-hub"],
        title: "Produtividade com VSCode",
        duration_in_minutes: 125,
        icon_url:
          "https://import.cdn.thinkific.com/220759/Zj9693bfTGywh3tfcR6r_vscode.jpg",
        locale: "pt-br",
        url: "https://www.cod3r.com.br/courses/produtividade-vscode",
      },
    ];
    modules.forEach(function (module) {
      let course = new Course(module);
      cb(course);
    });
  }
}
