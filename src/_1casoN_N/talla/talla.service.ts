import { Injectable } from '@nestjs/common';
import { CreateTallaDto } from './dto/create-talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Talla } from './entities/talla.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TallaService {
  constructor(
    @InjectRepository(Talla,'base2')
    private readonly tallaRepository: Repository<Talla>,
  ) {}
  async crearProducto(nombre: string): Promise<Talla> {
    const producto = this.tallaRepository.create({ nombre });
    return await this.tallaRepository.save(producto);
  }
  async obtenerTodos(): Promise<Talla[]> {
    return await this.tallaRepository.find();
  }
  async obtenerPorId(id: number): Promise<Talla> {
    return await this.tallaRepository.findOne({ where: { id } });
  }
  async eliminarProducto(id: number): Promise<string> {
    const producto = await this.tallaRepository.findOne({ where: { id } });

    if (!producto) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    await this.tallaRepository.remove(producto);
    return `Producto con ID ${id} eliminado correctamente`;
  }
}