import { getCustomRepository } from 'typeorm';
//import  smtpTransport from 'nodemailer-smtp-transport';
import nodemailer ,{ Transporter } from 'nodemailer';
import { resolve } from 'path';
import handlebars from 'handlebars';
import fs from 'fs';
import smtpTransport from 'nodemailer-smtp-transport';
import { UsersRepository } from '../repositories/UsersRepository';
import { CoursesRepository } from '../repositories/CourseRepository';

class SendMailService{
    private client: Transporter;

    constructor() {

        let transporter = nodemailer.createTransport(({
            service: "gmail",
            host: "smtp.gmail.com",
             auth: {
                 user: "cde.usjt@gmail.com",
                 pass: "cdeusjt@21"
            }
         }));
         this.client = transporter;
    }

    async executeWelcome(to: string,subject: string, Nome?: string){       

        const welcomePath = resolve(__dirname,"..","views","email","welcome.hbs");
        const templateFileContent = fs.readFileSync(welcomePath).toString("utf-8");
  
        const welcomeTemplateParse = handlebars.compile(templateFileContent);
        const html = welcomeTemplateParse({name:Nome});



      const message =  await this.client.sendMail({
            to,
            subject,
            html,
            from:"Central de Estudos<cde.usjt@gmail.com>" 
        })
        //onsole.log('Message sent: %s', message.messageId);
        // Preview only available when sending through an Ethereal account
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
       
    }
    async executeWelcomeNewslleter(to: string, subject: string, Nome: string) {
        const welcomeNesPath = resolve(__dirname,"..","views","email","welcomeNews.hbs");
        const templateFileContent = fs.readFileSync(welcomeNesPath).toString("utf-8");
  
        const welcomeTemplateParse = handlebars.compile(templateFileContent);

        const html = welcomeTemplateParse({name:Nome});

      const message =  await this.client.sendMail({
            to,
            subject,
            html,
            from:"Central de Estudos Newsletter<cde.usjt@gmail.com>" 
        })
        //console.log('Message sent: %s', message.messageId);
        // Preview only available when sending through an Ethereal account
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }


    async execDefault(to:string, subject:string,body:string){
        const message =  await this.client.sendMail({
            to,
            subject,
            html:body,
            from:"Central de Estudos <cde.usjt@gmail.com>" 
        })
        //console.log('Message sent: %s', message.messageId);
        // Preview only available when sending through an Ethereal account
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
    async execEmailNews(CD_USUARIO: string, CD_CURSO: string) {
        const userRepository = getCustomRepository(UsersRepository);
        const courseRepository = getCustomRepository(CoursesRepository);

        const user = await userRepository.findOne(CD_USUARIO);
        const course = await courseRepository.findOne(CD_CURSO);

        const welcomeNesPath = resolve(__dirname,"..","views","email","newsletter.hbs");
        const templateFileContent = fs.readFileSync(welcomeNesPath).toString("utf-8");
  
        const welcomeTemplateParse = handlebars.compile(templateFileContent);

        const html = welcomeTemplateParse({nome:user.NM_USUARIO,nomeCurso:course.NM_CURSO,urlCurso:course.URL_CURSO});
       
        const message =  await this.client.sendMail({
            to:user.DS_EMAIL,
            subject:"Cursos Novos CDE",
            html,
            from:"Central de Estudos <cde.usjt@gmail.com>" 
        })
        //console.log('Message sent: %s', message.messageId);
        // Preview only available when sending through an Ethereal account
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

export default new SendMailService();