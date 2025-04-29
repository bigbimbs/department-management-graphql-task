import { IsString, MinLength } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateSubDepartmentDto } from './create-department.dto';

@InputType()
export class UpdateSubDepartmentDto extends PartialType(CreateSubDepartmentDto) {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;
} 