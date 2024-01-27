import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductCategoryDto } from '../dtos';
import { ProductCategoryEntity } from '../entities';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategoryEntity)
    private readonly repository: Repository<ProductCategoryEntity>,
  ) {}

  async create(
    productCategoryData: CreateProductCategoryDto,
  ): Promise<ProductCategoryEntity> {
    return await this.repository.save(productCategoryData);
  }

  async readAll(): Promise<ProductCategoryEntity[]> {
    return await this.repository.find();
  }

  async readById(id: number): Promise<ProductCategoryEntity> {
    return await this.repository.findOne({ where: { id } });
  }
}
