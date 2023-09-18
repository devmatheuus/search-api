import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos')
export class ProcessesEntity {
  @PrimaryGeneratedColumn({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ type: 'datetime' })
  readonly dt_deposito: Date;

  @Column({ length: 20, type: 'varchar' })
  readonly cnpj_cpf: string;

  @Column({ length: 150, type: 'varchar' })
  readonly marca: string;

  @Column({ length: 100, type: 'varchar' })
  readonly natureza: string;

  @Column({ length: 50, type: 'varchar' })
  readonly apresentacao: string;

  @Column({ length: 200, type: 'varchar' })
  readonly procurador: string;

  @Column({ type: 'datetime' })
  readonly dt_vigencia: Date;

  @Column({ type: 'datetime' })
  readonly dt_concessao: Date;

  @Column({ type: 'datetime' })
  readonly dt_prorrogacao: Date;

  @Column({ type: 'text' })
  readonly apostila: string;

  @Column({ type: 'varchar', length: 50 })
  readonly prioridade_num: string;

  @Column({ type: 'varchar', length: 20 })
  readonly prioridade_data: string;

  @Column({ type: 'varchar', length: 50 })
  readonly prioridade_pais: string;

  @Column({ type: 'varchar', length: 100 })
  readonly arquivo: string;
}
