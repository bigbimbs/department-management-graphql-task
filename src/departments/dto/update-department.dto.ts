import { IsString, MinLength } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateDepartmentDto } from './create-department.dto';

@InputType()
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;
}
