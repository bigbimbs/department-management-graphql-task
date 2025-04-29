import {
  IsString,
  MinLength,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubDepartmentDto {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;
}

@InputType()
export class CreateDepartmentDto {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;

  @Field(() => [CreateSubDepartmentDto], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubDepartmentDto)
  subDepartments?: CreateSubDepartmentDto[];
}
