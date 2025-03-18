import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TallaService } from './talla.service';
import { CreateTallaDto } from './dto/create-talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';

@Controller('tallas')
export class TallaController {
  constructor(private readonly productosService: TallaService) {}

  @Post()
  async crearProducto(@Body() body: { nombre: string; descripcion: string }) {
    return await this.productosService.crearProducto(body.nombre);
  }

  @Get()
  async obtenerTodos() {
    return await this.productosService.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: number) {
    return await this.productosService.obtenerPorId(id);
  }

  @Delete(':id')
  async eliminarProducto(@Param('id') id: number) {
    return await this.productosService.eliminarProducto(id);
  }
}
