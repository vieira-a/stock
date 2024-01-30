import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUnitDto, UpdateUnitDto } from '../../dtos';
import { UnitEntity } from '../../entities';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(UnitEntity)
    private readonly repository: Repository<UnitEntity>,
  ) {}

  async create(unitData: CreateUnitDto): Promise<UnitEntity> {
    return await this.repository.save(unitData);
  }

  async readAll(): Promise<UnitEntity[]> {
    return await this.repository.find();
  }

  async readById(id: number): Promise<UnitEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, unitData: UpdateUnitDto) {
    return await this.repository.update(id, unitData);
  }
}
