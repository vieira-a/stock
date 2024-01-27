import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateProductCategoryDto, UpdateProductCategoryDto } from '../dtos';
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

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryData: UpdateProductCategoryDto,
  ) {
    await this.service.update(id, categoryData);
    return 'Categoria de produto atualizada com sucesso';
  }
}
