import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";

class profileDTO {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsInt()
    age: number;
  };
export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsNotEmpty()
 @ValidateNested()
  @Type(() => profileDTO)
  profile: profileDTO;
}
