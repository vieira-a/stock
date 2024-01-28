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
import { CreateProductTypeDto, UpdateProductTypeDto } from '../dtos';
import { ProductTypeService } from '../services';

@Controller('product/type')
export class ProductTypeController {
  constructor(private readonly service: ProductTypeService) {}

  @Post()
  async create(
    @Body() productTypeData: CreateProductTypeDto,
    @Res() res: Response,
  ): Promise<Response> {
    await this.service.create(productTypeData);
    return createdSuccess(res);
  }

  @Get()
  async readAll(@Res() res: Response): Promise<Response> {
    const productTypes = await this.service.readAll();
    return readSuccess(res, productTypes);
  }

  @Get(':id')
  async readById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const productType = await this.service.readById(id);

    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }

    return readSuccess(res, productType);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productTypeData: UpdateProductTypeDto,
    @Res() res: Response,
  ): Promise<Response> {
    const productType = await this.service.readById(id);

    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }

    await this.service.update(id, productTypeData);
    return updatedSuccess(res);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const productType = await this.service.readById(id);

    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }

    await this.service.delete(id);
    return deletedSuccess(res);
  }
}
