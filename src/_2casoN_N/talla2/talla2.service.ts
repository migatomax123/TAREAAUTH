import { Injectable } from '@nestjs/common';
import { CreateTalla2Dto } from './dto/create-talla2.dto';
import { UpdateTalla2Dto } from './dto/update-talla2.dto';
import { Talla2 } from './entities/talla2.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Talla2Service {
  constructor(
    @InjectRepository(Talla2,'base2')
    private readonly tallaRepository: Repository<Talla2>,
  ) {}
  async create(nombre: string): Promise<Talla2> {
    const producto = this.tallaRepository.create({ nombre });
    return await this.tallaRepository.save(producto);
  }
  async findAll(): Promise<Talla2[]> {
    return await this.tallaRepository.find();
  }
  async findOne(id: number): Promise<Talla2> {
    return await this.tallaRepository.findOne({ where: { id } });
  }
  async update(id:number,nombre: UpdateTalla2Dto): Promise<Talla2> {
      const talla = await this.findOne(id);
      this.tallaRepository.merge(talla, nombre);
      return this.tallaRepository.save(talla);
  }
  async remove(id: number): Promise<string> {
    const producto = await this.tallaRepository.findOne({ where: { id } });

    if (!producto) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    await this.tallaRepository.remove(producto);
    return `Producto con ID ${id} eliminado correctamente`;
  }
}
