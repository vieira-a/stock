import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { DataNotFoundException } from '../../../../shared/exceptions';
import {
  createdSuccess,
  deletedSuccess,
  readSuccess,
  updatedSuccess,
} from '../../../../shared/helpers/http-response';
import { CreateCategoryDto, UpdateCategoryDto } from '../../dtos';
import { CategoryService } from '../services';

@Controller('product/category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}
  @Post()
  async create(
    @Body() productCategoryData: CreateCategoryDto,
    @Res() res: Response,
  ): Promise<Response> {
    await this.service.create(productCategoryData);
    return createdSuccess(res);
  }

  @Get()
  async readAll(@Res() res: Response): Promise<Response> {
    const categories = await this.service.readAll();

    if (categories.length === 0) {
      throw new DataNotFoundException();
    }

    return readSuccess(res, categories);
  }

  @Get(':id')
  async readById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const category = await this.service.readById(id);

    if (!category) {
      throw new DataNotFoundException();
    }

    return readSuccess(res, category);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryData: UpdateCategoryDto,
    @Res() res: Response,
  ) {
    const category = await this.service.readById(id);

    if (!category) {
      throw new DataNotFoundException();
    }

    await this.service.update(id, categoryData);
    return updatedSuccess(res);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const category = await this.service.readById(id);

    if (!category) {
      throw new DataNotFoundException();
    }

    await this.service.delete(id);
    return deletedSuccess(res);
  }
}
