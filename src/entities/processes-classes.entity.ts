import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_classes')
export class ProcessesClassesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id_classe: number;

  @Column({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ length: 20, type: 'varchar' })
  readonly classe: string;

  @Column({ type: 'mediumtext' })
  readonly especificacao: string;

  @Column({ length: 45, type: 'varchar' })
  readonly ncl: string;

  @Column({ length: 100, type: 'varchar' })
  readonly status: string;

  @Column({ type: 'mediumtext' })
  readonly traducao_especificacao: string;
}
