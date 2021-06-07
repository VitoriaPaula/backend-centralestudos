import { getCustomRepository } from 'typeorm';
import { Response,Request } from 'express';
import sendEmail from '../services/sendEmail';

class SendEmailController{
    async exec(req:Request,res:Response){
        const { DS_EMAIL,ASSUNTO, MENSSAGEM} = req.body;

        await sendEmail.execute(DS_EMAIL,ASSUNTO,MENSSAGEM);

        

        

        return res.sendStatus(200);
    }
}

export { SendEmailController };