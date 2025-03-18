import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User2 } from './entities/user.entity';
import { Profile } from '../profile/entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User2,'base2')
    private readonly userRepository: Repository<User2>,
    @InjectRepository(Profile,'base2')
    private readonly profileRepository: Repository<Profile>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User2> {
    const { profile, ...userData } = createUserDto;
    const newProfile = this.profileRepository.create(profile);
    await this.profileRepository.save(newProfile);
    const user = this.userRepository.create({ ...userData, profile: newProfile });
    return this.userRepository.save(user);
  }
  async findAll(): Promise<User2[]> {
    return this.userRepository.find({ relations: ['profile'] });
  }
  async findOne(id: number): Promise<User2> {
    const user = await this.userRepository.findOne({ where: { id }, relations: ['profile'] });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User2> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }
  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`User with id ${id} not found`);
  }
}
