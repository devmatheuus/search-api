import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_despacho')
export class DispatchProcessesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id_despacho: number;

  @Column({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ type: 'varchar', length: 10 })
  readonly num_despacho: string;

  @Column({ type: 'decimal' })
  readonly rpi: number;

  @Column({ type: 'datetime' })
  readonly dt_rpi: Date;

  @Column({ type: 'text' })
  readonly desc_despacho: string;
}
