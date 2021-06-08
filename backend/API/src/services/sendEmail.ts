//import  smtpTransport from 'nodemailer-smtp-transport';
import nodemailer ,{ Transporter } from 'nodemailer';
import { resolve } from 'path';
import handlebars from 'handlebars';
import fs from 'fs';
import smtpTransport from 'nodemailer-smtp-transport';

class SendMailService{

    private client: Transporter;

    constructor() {

        let transporter = nodemailer.createTransport(smtpTransport({
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
            from:"Central de Estudos Newslleter<noreply@cde.com.br>" 
        })
        console.log('Message sent: %s', message.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));

        this.client.sendMail(message, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
       });
    }
}

export default new SendMailService();