import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Talla2Service } from './talla2.service';
import { CreateTalla2Dto } from './dto/create-talla2.dto';
import { UpdateTalla2Dto } from './dto/update-talla2.dto';

@Controller('talla2')
export class Talla2Controller {
  constructor(private readonly talla2Service: Talla2Service) {}

  @Post()
  create(@Body() nombre: string) {
    return this.talla2Service.create(nombre);
  }

  @Get()
  findAll() {
    return this.talla2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talla2Service.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talla2Service.remove(+id);
  }
}
