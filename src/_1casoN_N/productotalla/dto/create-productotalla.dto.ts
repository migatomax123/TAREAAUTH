import { IsNotEmpty } from "class-validator"

export class ProductoTallaDto {
    @IsNotEmpty()
    tallaId: number
  
    @IsNotEmpty()
    precio: number
  }
