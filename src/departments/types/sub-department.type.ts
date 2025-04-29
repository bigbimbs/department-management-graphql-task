import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SubDepartment {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
} 