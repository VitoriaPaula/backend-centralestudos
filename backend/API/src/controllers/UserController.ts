import { Request, Response } from 'express';
import { getCustomRepository, UpdateQueryBuilder } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import sendEmail from '../services/sendEmail';

class UserController{
    async create(request: Request,response: Response){
        const { NM_USUARIO, DS_EMAIL,DS_CARGO,DT_NASCIMENTO,PASS}  = request.body;

        
        const userRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await userRepository.findOne({
            DS_EMAIL
        });
        if (userAlreadyExists){
            return response.status(400).json({
               error: "User already exists"
            }) 
        }
        var CD_PERMISSAO = 1;
        const user = userRepository.create({ NM_USUARIO, DS_EMAIL,DS_CARGO,DT_NASCIMENTO,CD_PERMISSAO,PASS});

        await userRepository.save(user);

        await sendEmail.execute(DS_EMAIL,"Bem vindo a central de estudos!")

        return response.status(201).json(user);
    }
    async filterUserID (req: Request,res: Response){
        const userRepository = getCustomRepository(UsersRepository);
        const { CD_USUARIO } =  req.body;
        const userFilter = await userRepository.find({where: {CD_USUARIO: CD_USUARIO}})
        //console.log(userFilter);
        //console.log(CD_USUARIO);
        return res.json(userFilter);
    }
    async filterUserEmail (req: Request,res: Response){
        const userRepository = getCustomRepository(UsersRepository);
        const  { DS_EMAIL } =  req.body;
        const userFilter = await userRepository.find(
            {where: {DS_EMAIL: DS_EMAIL}}
            );
        //console.log(userFilter);
        //console.log(DS_EMAIL);
        return res.json(userFilter);
    }
    async validaLogin(req:Request,res:Response){
        const userRepository = getCustomRepository(UsersRepository);
        const  { DS_EMAIL,PASS } =  req.body;
        
        //const user = await userRepository.createQueryBuilder("users").where("users.DS_EMAIL = :DS_EMAIL", {DS_EMAIL: DS_EMAIL}).andWhere("users.PASS = :PASS", { PASS: PASS }).getOne();
        const user = await userRepository.findOne({where: {DS_EMAIL: DS_EMAIL,PASS:PASS }})
        //console.log(user);

        if(user)
        {
            return res.json(user)
        }
        else{
            return res.sendStatus(400)
        }   
    }
    
}

export { UserController };

