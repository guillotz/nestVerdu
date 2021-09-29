import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('producto')
export class Producto extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: 'id de producto'
    })
    id: number;

    @Column({
        type: 'varchar'
    })
    nombre;

    @Column({
        type: 'varchar'
    })
    unidad;

    @Column({
        type: Number
    })
    precio;

    @Column({
        type: Number
    })
    cantidad;

    @Column({
        type: Number
    })
    comprar;

    @Column({
        type: 'varchar'
    })
    foto;

    @Column({
        type: 'varchar'
    })
    descripcion;
}