import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_sobrestadores')
export class StayedProcessesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id_processos_sobrestadores: number;

  @Column({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ type: 'text' })
  readonly marca_sobrestador: string;

  @Column({ type: 'decimal' })
  readonly processo_sobrestador: number;
}
