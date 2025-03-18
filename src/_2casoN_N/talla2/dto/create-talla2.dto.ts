import { IsNotEmpty, IsString } from "class-validator";

export class CreateTalla2Dto {
    @IsNotEmpty()
    @IsString()
    nombre: string
  }
