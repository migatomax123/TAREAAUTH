import { Module } from '@nestjs/common';
import { ProductotallaService } from './productotalla.service';
import { ProductotallaController } from './productotalla.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoTalla } from './entities/productotalla.entity';
import { Talla } from '../talla/entities/talla.entity';
import { Producto } from '../producto/entities/producto.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductoTalla,Talla,Producto],'base2')],
  controllers: [ProductotallaController],
  providers: [ProductotallaService],
})
export class ProductotallaModule {}
