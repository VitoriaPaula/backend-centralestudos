import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("courses")
class Course {
  @PrimaryColumn()
  readonly CD_CURSO: string;

  @Column()
  NM_CURSO: string;

  @Column()
  URL_CURSO: string;

  @Column("text")
  DS_CURSO: string;

  @Column()
  DS_DURACAO: string;

  @Column()
  DS_IDIOMA: string;

  @Column()
  DS_CATEGORIA: string;

  @Column()
  DS_SITE: string;

  @Column()
  DS_LINGUAGEM: string;

  @CreateDateColumn()
  CREATED_AT: Date;

  constructor(courseResponse: any) {
    this.CD_CURSO = uuid();
    this.NM_CURSO = courseResponse?.title;
    this.URL_CURSO = courseResponse?.url;
    this.DS_CURSO = courseResponse?.summary;
    this.DS_DURACAO = courseResponse?.duration_in_minutes;
    this.DS_IDIOMA = courseResponse?.locale;
    this.DS_CATEGORIA = courseResponse?.products[0];
    this.DS_SITE = "Microsoft";
    this.DS_LINGUAGEM = courseResponse?.products[0];

    if (!this.CD_CURSO) {
      this.CD_CURSO = uuid();
    }
  }
}
export { Course };
