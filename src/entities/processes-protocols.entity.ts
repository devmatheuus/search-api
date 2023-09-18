import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('processos_protocolos')
export class ProcessesProtocolsEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly idprocessos_protocolos: number;

  @Column({ type: 'decimal' })
  readonly num_processo: number;

  @Column({ length: 45, type: 'varchar' })
  readonly num_protocolo: string;

  @Column({ type: 'datetime' })
  readonly data_protocolo: Date;

  @Column({ length: 10, type: 'varchar' })
  readonly cod_servico: string;

  @Column({ type: 'varchar', length: 250 })
  readonly requerente: string;

  @Column({ length: 2, type: 'varchar' })
  readonly requerente_pais: string;

  @Column({ length: 2, type: 'varchar' })
  readonly requerente_uf: string;

  @Column({ length: 250, type: 'varchar' })
  readonly procurador: string;

  @Column({ length: 10, type: 'varchar' })
  readonly num_despacho: string;

  @Column({ length: 250, type: 'varchar' })
  readonly cessionario: string;
}
