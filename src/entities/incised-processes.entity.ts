import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_inciso')
export class IncisedProcessesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id_inciso: number;

  @Column({ type: 'int' })
  readonly id_artigos: number;

  @Column({ type: 'varchar', length: 10 })
  readonly inciso: string;
}
