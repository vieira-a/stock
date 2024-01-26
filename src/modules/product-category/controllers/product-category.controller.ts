import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CreateProductCategoryDto } from '../dtos';
import { ProductCategoryService } from '../services';

@Controller('product/category')
export class ProductCategoryController {
  constructor(private readonly service: ProductCategoryService) {}
  @Post()
  @HttpCode(201)
  async create(@Body() productCategoryData: CreateProductCategoryDto) {
    await this.service.create(productCategoryData);
    return 'Categoria de produto registrada com sucesso';
  }
}
