import { Injectable } from '@nestjs/common';
import { CreateProducto2Dto } from './dto/create-producto2.dto';
import { UpdateProducto2Dto } from './dto/update-producto2.dto';
import { Producto2 } from './entities/producto2.entity';
import { Talla2 } from '../talla2/entities/talla2.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Producto2Service {
  constructor(
    @InjectRepository(Producto2,'base2')
    private readonly productoRepository: Repository<Producto2>,
    @InjectRepository(Talla2,'base2')
    private readonly tallaRepository: Repository<Talla2>,
  ) {}

  async crearProducto(nombre: string, descripcion: string, tallaIds: number[]): Promise<Producto2> {
    const producto = this.productoRepository.create({ nombre, descripcion });

    if (tallaIds.length > 0) {
      const tallas = await this.tallaRepository.find({
        where: { id: In(tallaIds)}}
      );
      producto.tallas = tallas;
    }

    return await this.productoRepository.save(producto);
  }
  async obtenerTodos(): Promise<Producto2[]> {
    return await this.productoRepository.find({ relations: ['tallas'] });
  }

  async obtenerPorId(id: number): Promise<Producto2> {
    return await this.productoRepository.findOne({ where: { id }, relations: ['tallas'] });
  }
   async asignarTallas(productoId: number, tallaIds: number[]): Promise<Producto2> {
    const producto = await this.productoRepository.findOne({ where: { id: productoId }, relations: ['tallas'] });
    if (!producto) {
      throw new Error(`Producto con ID ${productoId} no encontrado`);
    }

    const tallas = await this.tallaRepository.findByIds(tallaIds);
    producto.tallas = tallas;

    return await this.productoRepository.save(producto);
  }

  async eliminarProducto(id: number): Promise<string> {
    const producto = await this.productoRepository.findOne({ where: { id } });

    if (!producto) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }

    await this.productoRepository.remove(producto);
    return `Producto con ID ${id} eliminado correctamente`;
  }
}