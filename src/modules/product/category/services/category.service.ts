import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto, UpdateCategoryDto } from '../../dtos';
import { CategoryEntity } from '../../entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  async create(categoryData: CreateCategoryDto): Promise<CategoryEntity> {
    return await this.repository.save(categoryData);
  }

  async readAll(): Promise<CategoryEntity[]> {
    return await this.repository.find();
  }

  async readById(id: number): Promise<CategoryEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, categoryData: UpdateCategoryDto) {
    return await this.repository.update(id, categoryData);
  }

  async delete(id: number) {
    return await this.repository.softDelete(id);
  }
}
