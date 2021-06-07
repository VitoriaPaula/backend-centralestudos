import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserCourses1623078087924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user_courses",
                columns:[
                    {
                        name: "ID",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "CD_USUARIO",
                        type: "varchar"
                    },
                    {
                        name:"DS_CATEGORIA",
                        type:"varchar"
                    },
                    {
                        name:"CREATED_AT",
                        type:"timestamp",
                        default: "now()"
                    }

                ],
                foreignKeys:[
                    {
                        name: "FK_USER",
                        referencedTableName:"users",
                        referencedColumnNames:["CD_USUARIO"],
                        columnNames:["CD_USUARIO"],
                        onDelete:"CASCADE",
                        onUpdate:"CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("user_courses")
    }

}
