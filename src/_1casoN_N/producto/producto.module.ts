import { Module } from '@nestjs/common';
import { ProductosService } from './producto.service';
import { ProductosController } from './producto.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Producto],'base2')],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductoModule {}
