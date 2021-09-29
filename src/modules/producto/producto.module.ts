import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from 'src/controllers/producto/producto.controller';
import { Producto } from 'src/entities/producto.entity';
import { ProductoService } from 'src/services/producto.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Producto]),
    ],
    controllers: [
        ProductoController
    ],
    providers: [
        ProductoService
    ]
})
export class ProductoModule {}
