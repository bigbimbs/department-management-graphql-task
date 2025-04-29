import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginDto {
  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;
}
