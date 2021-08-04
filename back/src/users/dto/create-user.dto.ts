import { IsNotEmpty } from 'class-validator';

class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;
}

export default CreateUserDto;
