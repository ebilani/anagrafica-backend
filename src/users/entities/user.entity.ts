import { Column, Model, Table } from "sequelize-typescript";
import { PrimaryGeneratedColumn } from "typeorm";

@Table({ tableName: 'user' })
export class UserEntity  extends Model{  
    @PrimaryGeneratedColumn('uuid') 
    id: number;  

    @Column({ field: 'name' }) 
    name: string;

    @Column({ field: 'username' }) 
    username: string;

    @Column({ field: 'password' }) 
    password: string;  

    @Column({ field: 'email' }) 
    email: string;

}
