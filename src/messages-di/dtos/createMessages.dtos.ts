import { IsString } from 'class-validator';

export class CreateMessagesDto {
  @IsString()
  content: string;
}
