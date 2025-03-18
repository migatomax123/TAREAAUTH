import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User2 } from './entities/user.entity';
import { Profile } from '../profile/entities/profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User2,Profile],'base2')],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
