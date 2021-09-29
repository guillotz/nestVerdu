export class ProductResponse {
    descripcion: string;
    precio: number;

    constructor(desc: string , precio : number){
        this.descripcion = desc;
        this.precio = precio;
    }
}