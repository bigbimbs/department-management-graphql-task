import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { SubDepartment } from './entities/sub-department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
    @InjectRepository(SubDepartment)
    private subDepartmentRepository: Repository<SubDepartment>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepository.create({
      name: createDepartmentDto.name,
    });

    const savedDepartment = await this.departmentRepository.save(department);

    if (createDepartmentDto.subDepartments && createDepartmentDto.subDepartments.length > 0) {
      const subDepartments = createDepartmentDto.subDepartments.map(subDept => ({
        name: subDept.name,
        department: savedDepartment,
      }));

      await this.subDepartmentRepository.save(subDepartments);
    }

    return this.findOne(savedDepartment.id);
  }

  async findAll() {
    return this.departmentRepository.find({
      relations: ['subDepartments'],
    });
  }

  async findOne(id: number) {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: ['subDepartments'],
    });

    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }

    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.findOne(id);
    department.name = updateDepartmentDto.name;
    return this.departmentRepository.save(department);
  }

  async remove(id: number) {
    const department = await this.findOne(id);
    await this.departmentRepository.remove(department);
    return { message: 'Department deleted successfully' };
  }
} 