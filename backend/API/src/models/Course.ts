import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("courses")
class Course {
    @PrimaryColumn()
    readonly CD_CURSO: string;

    @Column()
    NM_CURSO:  string;

    @Column()
    URL_CURSO: string;

    @Column()
    DS_CURSO: string;

    @Column()
    DS_DURACAO: string;

    @Column()
    DS_IDIOMA: string;

    @CreateDateColumn()
    CREATED_AT: Date;

    constructor(){
        if(!this.CD_CURSO){
            this.CD_CURSO = uuid();
        }
    }
}
export { Course }