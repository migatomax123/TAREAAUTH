import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts,'base2')
    private postsRepository: Repository<Posts>,
  ) {}
  async create(createPostDto: CreatePostDto): Promise<Posts> {
    const post = this.postsRepository.create({  ...createPostDto,  user: { id: createPostDto.autorId }, });
    return this.postsRepository.save(post);
  }
  async findAll(): Promise<Posts[]> {  return this.postsRepository.find({ relations: ['user'] });  }
  async findOne(id: number): Promise<Posts> {
    const post = await this.postsRepository.findOne({ where: { id }, relations: ['user'] });
    if (!post) {  throw new NotFoundException(`Post with ID "${id}" not found`); }
    return post;
  }
  async update(id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
    const post = await this.findOne(id);
    this.postsRepository.merge(post, updatePostDto);
    return this.postsRepository.save(post);
  }
  async remove(id: number): Promise<void> {
    const post = await this.findOne(id);
    await this.postsRepository.remove(post);
  }
  async findByUser(userId: number): Promise<Posts[]> {
    return this.postsRepository.find({  where: { user: { id: userId } },  relations: ['user'], });
  }
}