import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {
    @PrimaryColumn()
    readonly CD_USUARIO: string;

    @Column()
    NM_USUARIO:  string;

    @Column()
    DS_EMAIL: string;

    @Column()
    DS_CARGO: string;

    @Column()
    DT_NASCIMENTO: Date;

    @Column()
    CD_PERMISSAO: number;

    @Column()
    PASS: string;

    @CreateDateColumn()
    CREATED_AT: Date;

    constructor(){
        if(!this.CD_USUARIO){
            this.CD_USUARIO = uuid();
        }
    }
}
export { User }