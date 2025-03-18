import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
      @InjectRepository(Profile,'base2')
      private readonly profileRepository: Repository<Profile>,
    ) {}
  create(createProfileDto: CreateProfileDto):Promise<Profile> {
    const libro=this.profileRepository.create(createProfileDto)
    return this.profileRepository.save(libro);
  }

  async findAll(): Promise<Profile[]> {
      return this.profileRepository.find();
    }
  async findOne(id: number): Promise<Profile> {
    const user = await this.profileRepository.findOne({ where: { id }});
    if (!user) throw new NotFoundException(`Profile with id ${id} not found`);
      return user;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto):Promise<Profile> {
    const user = await this.findOne(id);
    Object.assign(user, updateProfileDto);
    return this.profileRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const result = await this.profileRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`User with id ${id} not found`);
  }
}
