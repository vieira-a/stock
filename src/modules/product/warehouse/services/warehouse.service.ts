import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateWarehouseDto } from '../../dtos';
import { WarehouseEntity } from '../../entities';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(WarehouseEntity)
    private readonly repository: Repository<WarehouseEntity>,
  ) {}

  async create(warehouseData: CreateWarehouseDto): Promise<WarehouseEntity> {
    return await this.repository.save(warehouseData);
  }

  async readAll(): Promise<WarehouseEntity[]> {
    return await this.repository.find();
  }

  async readById(id: number): Promise<WarehouseEntity> {
    return await this.repository.findOne({ where: { id } });
  }
}
