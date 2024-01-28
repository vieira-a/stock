import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import {
  createdSuccess,
  deletedSuccess,
  readSuccess,
  updatedSuccess,
} from '../../../shared/helpers/http-response';
import { CreateProductCategoryDto, UpdateProductCategoryDto } from '../dtos';
import { ProductCategoryService } from '../services';

@Controller('product/category')
export class ProductCategoryController {
  constructor(private readonly service: ProductCategoryService) {}
  @Post()
  async create(
    @Body() productCategoryData: CreateProductCategoryDto,
    @Res() res: Response,
  ) {
    await this.service.create(productCategoryData);
    return createdSuccess(res);
  }

  @Get()
  async readAll(@Res() res: Response) {
    const productCategories = await this.service.readAll();
    return readSuccess(res, productCategories);
  }

  @Get(':id')
  async readById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const productCategory = await this.service.readById(id);
    return readSuccess(res, productCategory);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryData: UpdateProductCategoryDto,
    @Res() res: Response,
  ) {
    await this.service.update(id, categoryData);
    return updatedSuccess(res);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const categoryDeleted = await this.service.delete(id);
    if (categoryDeleted.affected === 0) {
      throw new NotFoundException('Categoria de produto não encontrada');
    }
    return deletedSuccess(res);
  }
}
