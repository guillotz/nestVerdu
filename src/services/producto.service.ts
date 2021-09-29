import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoRepository } from 'src/repositories/producto.repository';

@Injectable()
export class ProductoService {
    constructor(@InjectRepository(ProductoRepository) private readonly productRepo: ProductoRepository) { }

    async getProducts(){
        return await this.productRepo.find();
    }

    async getProduct(id){
        console.log()
        return await this.productRepo.findOne(id);
    }

    async createProduct(dto: any){
        return await this.productRepo.save(dto);
    }

    async updateProduct(id: string, dto: any){
        return await this.productRepo.update(id,dto);
    }

    async deleteProduct(id){
        return await this.productRepo.delete(id);
    }
}
