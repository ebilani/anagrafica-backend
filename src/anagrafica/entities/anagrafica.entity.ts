import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';
import { TipologiaAnagrafica } from './tipologia-anagrafica.entity';

@Table({ tableName: 'anagrafica' })
export class Anagrafica extends Model {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ field: 'nome' })
  nome: string;

  @Column({ field: 'descrizione' })
  descrizione: string;

  @Column({ field: 'genere' })
  genere: string;

  @ForeignKey(() => TipologiaAnagrafica)
  @Column({field:'tipAnagraficaId'})
  tipAnagId: number;

  @BelongsTo(() => TipologiaAnagrafica)
  tipAnag: TipologiaAnagrafica;
}
