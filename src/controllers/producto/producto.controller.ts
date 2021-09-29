import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoService } from 'src/services/producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){}

    @Get()
    getProducts() {
        console.log("");
        return this.productoService.getProducts();
    }

    @Get(':id')
    async getProduct(@Param('id') id) {
        const prod = await this.productoService.getProduct(id);
        return prod;
    }

    @Post()
    crearProducto(@Body() productoDTO: any) {
        return this.productoService.createProduct(productoDTO);
    }

    @Put(':id')
    updateProducto(@Param('id') id: string, @Body() productoDTO: any) {
        return this.productoService.updateProduct(id,productoDTO);
    }

    @Delete(':id')
    deleteProducto(@Param('id') id: number) {
        return this.productoService.deleteProduct(id);
    }
}
