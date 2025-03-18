import { Module } from '@nestjs/common';
import { Producto2Service } from './producto2.service';
import { Producto2Controller } from './producto2.controller';
import { Producto2 } from './entities/producto2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talla2 } from '../talla2/entities/talla2.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Producto2,Talla2],'base2')],
  controllers: [Producto2Controller],
  providers: [Producto2Service],
})
export class Producto2Module {}
