import { Module } from '@nestjs/common';
import { Talla2Service } from './talla2.service';
import { Talla2Controller } from './talla2.controller';
import { Talla2 } from './entities/talla2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Talla2],'base2')],
  controllers: [Talla2Controller],
  providers: [Talla2Service],
})
export class Talla2Module {}
