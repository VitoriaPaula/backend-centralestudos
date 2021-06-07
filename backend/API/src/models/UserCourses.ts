import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("user_courses")
class UserCourses{
    @PrimaryColumn()
    readonly ID: string;

    @Column()
    CD_USUARIO:  string;

    @Column()
    DS_CATEGORIA: string;

    @CreateDateColumn()
    CREATED_AT: Date;
    
    constructor(){
        if(!this.ID){
            this.ID = uuid();
        }
    }
}

export {UserCourses};