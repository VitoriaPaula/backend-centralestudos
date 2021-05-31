import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourse1622168109326 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"courses",
                columns:[
                    {
                        name: "CD_CURSO",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "NM_CURSO",
                        type: "varchar"
                    },
                    {
                        name:"URL_CURSO",
                        type:"varchar"
                    },
                    {
                        name:"DS_CURSO",
                        type:"varchar"
                    },
                    {
                        name:"DS_DURACAO",
                        type:"varchar"
                    },
                    {
                        name:"DS_IDIOMA",
                        type:"varchar"
                    },
                    {
                        name:"ds_categoria",
                        type:"varchar"
                    },
                    {
                        name:"ds_site",
                        type:"varchar"
                    },
                    {
                        name:"ds_linguagem",
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
        queryRunner.dropTable("courses")
    }

}
