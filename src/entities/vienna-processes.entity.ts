import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_vienna')
export class ViennaProcessesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly idprocessos_vienna: number;

  @Column({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ length: 45, type: 'varchar' })
  readonly codigo: string;

  @Column({ length: 10, type: 'varchar' })
  readonly edicao: string;
}
