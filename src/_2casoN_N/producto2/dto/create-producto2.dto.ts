import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProducto2Dto {
    @IsNotEmpty()
    @IsString()
    nombre: string
  
    @IsNotEmpty()
    @IsString()
    descripcion: string
  
    @IsArray()
    @IsNumber({}, { each: true })
    tallaIds: number[]
  }
