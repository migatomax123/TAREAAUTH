import { PartialType } from '@nestjs/mapped-types';
import { ProductoTallaDto } from './create-productotalla.dto';

export class UpdateProductotallaDto extends PartialType(ProductoTallaDto) {}
