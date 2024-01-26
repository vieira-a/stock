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
}
