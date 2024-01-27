import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CreateProductTypeDto } from '../dtos';
import { ProductTypeService } from '../services';

@Controller('product/type')
export class ProductTypeController {
  constructor(private readonly service: ProductTypeService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() productTypeData: CreateProductTypeDto) {
    await this.service.create(productTypeData);
    return 'Tipo de produto registrado com sucesso';
  }

  @Get()
  @HttpCode(200)
  async readAll() {
    return await this.service.readAll();
  }

  @Get(':id')
  @HttpCode(200)
  @HttpCode(404)
  async readById(@Param('id', ParseIntPipe) id: number) {
    const productType = await this.service.readById(id);

    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }
    return productType;
  }
}
