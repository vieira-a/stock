import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductTypeDto } from '../dtos';
import { ProductTypeEntity } from '../entities';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectRepository(ProductTypeEntity)
    private readonly repository: Repository<ProductTypeEntity>,
  ) {}

  async create(
    productTypeData: CreateProductTypeDto,
  ): Promise<ProductTypeEntity> {
    return await this.repository.save(productTypeData);
  }

  async readAll(): Promise<ProductTypeEntity[]> {
    return await this.repository.find();
  }

  async readById(id: number): Promise<ProductTypeEntity> {
    return await this.repository.findOne({ where: { id } });
  }
}
