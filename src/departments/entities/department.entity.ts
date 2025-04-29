import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SubDepartment } from './sub-department.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity('departments')
export class Department {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [SubDepartment])
  @OneToMany(() => SubDepartment, (subDepartment) => subDepartment.department)
  subDepartments: SubDepartment[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
