import { IsPhoneNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString() // id pk
  id: string;
  @IsString() // 이름
  name: string;
  @IsString()
  pw: string;
  @IsPhoneNumber()
  phoneNumber: string;
}
