import { Posts } from 'src/_caso1:N/posts/entities/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario: string;

  @Column()
  email: string;

  @OneToMany(() => Posts, post => post.user)
  posts: Posts[];
}