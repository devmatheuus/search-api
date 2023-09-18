import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_artigos')
export class ProcessesArticlesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id_artigos: number;

  @Column({ type: 'varchar', length: 10 })
  readonly artigo: string;
}
