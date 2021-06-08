import { getCustomRepository } from 'typeorm';
import { Response,Request } from 'express';
import sendEmail from '../services/sendEmail';

class SendEmailController{
    async execDefault(req: Request,res: Response){
        const { to,subject,body} = req.body;

        await sendEmail.execDefault(to,subject,body);

        return res.sendStatus(201).json("Mail done!");
    }
}

export { SendEmailController };