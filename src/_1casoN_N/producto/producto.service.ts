import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto,'base2')
    private readonly productoRepository: Repository<Producto>,
  ) {}
  async crearProducto(nombre: string, descripcion: string): Promise<Producto> {
    const producto = this.productoRepository.create({ nombre, descripcion });
    return await this.productoRepository.save(producto);
  }
  async obtenerTodos(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }
  async obtenerPorId(id: number): Promise<Producto> {
    return await this.productoRepository.findOne({ where: { id } });
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