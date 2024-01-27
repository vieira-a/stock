import { Body, Controller, HttpCode, Post } from '@nestjs/common';

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
}
