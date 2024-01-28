import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateProductTypeDto, UpdateProductTypeDto } from '../dtos';
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

  @Patch(':id')
  @HttpCode(200)
  @HttpCode(404)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productTypeData: UpdateProductTypeDto,
  ) {
    const productType = await this.service.readById(id);
    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }
    await this.service.update(id, productTypeData);
    return 'Tipo de produto atualizado com sucesso';
  }

  @Delete(':id')
  @HttpCode(200)
  @HttpCode(404)
  async delete(@Param('id', ParseIntPipe) id: number) {
    const productType = await this.service.readById(id);

    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }
    await this.service.delete(id);
    return 'Tipo de produto excluído com sucesso';
  }
}
