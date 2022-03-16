import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anagrafica } from "./anagrafica.entity";
@Table({ tableName: 'tipologia_anagrafica'})
export class TipologiaAnagrafica extends Model {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({field:'descrizione'})
    descrizione: string;

    @HasMany(() => Anagrafica)
    anagrafiche: Anagrafica[];
  
}