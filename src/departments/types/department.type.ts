import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SubDepartment } from '../entities/sub-department.entity';

@ObjectType()
export class Department {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [SubDepartment], { nullable: true })
  subDepartments?: SubDepartment[];
}
