import { Injectable } from '@nestjs/common';
import { ProductoTallaDto } from './dto/create-productotalla.dto';
import { UpdateProductotallaDto } from './dto/update-productotalla.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoTalla } from './entities/productotalla.entity';
import { Producto } from '../producto/entities/producto.entity';
import { Talla } from '../talla/entities/talla.entity';

@Injectable()
export class ProductotallaService {
  constructor(
    @InjectRepository(ProductoTalla,'base2')
    private readonly productoTallaRepository: Repository<ProductoTalla>,
    @InjectRepository(Producto,'base2')
    private readonly productoRepository: Repository<Producto>,
    @InjectRepository(Talla,'base2')
    private readonly tallaRepository: Repository<Talla>,
  ) {}

  async asignarPrecio(productoId: number, tallaId: number, precio: number): Promise<ProductoTalla> {
    const producto = await this.productoRepository.findOne({ where: { id: productoId } });
    const talla = await this.tallaRepository.findOne({ where: { id: tallaId } });

    if (!producto || !talla) {
      throw new Error('Producto o talla no encontrados');
    }

    const productoTalla = this.productoTallaRepository.create({ producto, talla, precio });
    return await this.productoTallaRepository.save(productoTalla);
  }

  async obtenerProductoTalla(productoId: number, tallaId: number): Promise<ProductoTalla | null> {
    return await this.productoTallaRepository.findOne({
      where: { producto: { id: productoId }, talla: { id: tallaId } },
      relations: ['producto', 'talla'],
    });
  }
}
