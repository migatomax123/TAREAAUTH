import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario, 'base1')
    private userRepository: Repository<Usuario>,
  ) {}

  async findOne(email: string): Promise<Usuario | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(name: string, email: string, password: string): Promise<Usuario> {
    const user = this.userRepository.create({
      name,
      email,
      password,
    });
    return this.userRepository.save(user);
  }

  async update(id: number, updateData: Partial<Usuario>): Promise<Usuario> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    Object.assign(user, updateData);
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    await this.userRepository.remove(user);
  }
}
