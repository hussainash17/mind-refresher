import { IsEmail } from 'class-validator';

export class FetchUsersDto {
  @IsEmail()
  email: string;
}
