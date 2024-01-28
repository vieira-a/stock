import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

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
    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Tipo de produto registrado com sucesso' });
  }

  @Get()
  async readAll(@Res() res: Response): Promise<Response> {
    const productTypes = await this.service.readAll();
    return res.status(HttpStatus.OK).json({
      data: productTypes,
    });
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
    return res.status(HttpStatus.OK).json({
      data: productType,
    });
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
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Tipo de produto atualizado com sucesso' });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const productType = await this.service.readById(id);

    if (!productType) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }
    await this.service.delete(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Tipo de produto excluído com sucesso' });
  }
}
