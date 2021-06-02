import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

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

        return response.status(201).json(user);
    }
    async filterUserID (request: Request,response: Response){
        const userRepository = getCustomRepository(UsersRepository);
        const cd_usuario =  request.body;
        const user = userRepository.findOne({where: {cd_usuario: cd_usuario}})

        return response.status(200).json(user);
    }   
}

export { UserController };

