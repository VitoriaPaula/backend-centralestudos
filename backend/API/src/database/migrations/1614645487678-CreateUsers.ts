import {Column, MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateUsers1614645487678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name: "CD_USUARIO",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "NM_USUARIO",
                        type: "varchar"
                    },
                    {
                        name:"DS_EMAIL",
                        type:"varchar"
                    },
                    {
                        name:"DS_CARGO",
                        type:"varchar"
                    },
                    {
                        name:"DT_NASCIMENTO",
                        type:"date"
                    },
                    {
                        name:"CD_PERMISSAO",
                        type:"int"
                    },
                    {
                        name:"PASS",
                        type:"varchar"
                    },
                    {
                        name:"CREATED_AT",
                        type:"timestamp",
                        default: "now()"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("users")
    }

}
