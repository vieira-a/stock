import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

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

  @Get()
  @HttpCode(200)
  async readAll() {
    return await this.service.readAll();
  }

  @Get(':id')
  async readById(@Param('id', ParseIntPipe) id: number) {
    return await this.service.readById(id);
  }
}
