import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductotallaService } from './productotalla.service';
import { ProductoTallaDto } from './dto/create-productotalla.dto';
import { UpdateProductotallaDto } from './dto/update-productotalla.dto';

@Controller('productotalla')
export class ProductotallaController {
  constructor(private readonly productoTallaService: ProductotallaService) {}

  @Post()
  async asignarPrecio(
    @Body() body: { productoId: number; tallaId: number; precio: number }
  ) {
    return await this.productoTallaService.asignarPrecio(body.productoId, body.tallaId, body.precio);
  }

  @Get(':productoId/:tallaId')
  async obtenerProductoTalla(@Param('productoId') productoId: number, @Param('tallaId') tallaId: number) {
    return await this.productoTallaService.obtenerProductoTalla(productoId, tallaId);
  }
}
