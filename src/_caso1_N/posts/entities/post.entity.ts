import { User } from 'src/_caso1:N/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  contenido: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}