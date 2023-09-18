import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_titulares')
export class OwnershipProcessesEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly idprocessos_titulares: number;

  @Column({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ length: 200, type: 'varchar' })
  readonly titular: string;

  @Column({ length: 2, type: 'varchar' })
  readonly pais: string;

  @Column({ type: 'varchar', length: 2 })
  readonly uf: string;
}
