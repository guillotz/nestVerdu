import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Id de usuario',
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 60
    })
    nombre: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    apellido: string;

    @Column({
        type: 'int',
    })
    edad: number;

    @Column({
        type: 'varchar'
    })
    password: string;
}
