import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Producto2Service } from './producto2.service';
import { CreateProducto2Dto } from './dto/create-producto2.dto';
import { UpdateProducto2Dto } from './dto/update-producto2.dto';

@Controller('productos2')
export class Producto2Controller {
  constructor(private readonly productosService: Producto2Service) {}
  @Post()
  async crearProducto(
    @Body() body: { nombre: string; descripcion: string; tallaIds: number[] }
  ) {
    return await this.productosService.crearProducto(body.nombre, body.descripcion, body.tallaIds);
  }
  @Get()
  async obtenerTodos() {
    return await this.productosService.obtenerTodos();
  }
  @Get(':id')
  async obtenerPorId(@Param('id') id: number) {
    return await this.productosService.obtenerPorId(id);
  }
  @Put(':id/tallas')
  async asignarTallas(
    @Param('id') id: number,
    @Body() body: { tallaIds: number[] }
  ) {
    return await this.productosService.asignarTallas(id, body.tallaIds);
  }
  @Delete(':id')
  async eliminarProducto(@Param('id') id: number) {
    return await this.productosService.eliminarProducto(id);
  }
}
