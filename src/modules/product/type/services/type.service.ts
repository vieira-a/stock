import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTypeDto, UpdateTypeDto } from '../../dtos';
import { TypeEntity } from '../../entities';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private readonly repository: Repository<TypeEntity>,
  ) {}

  async create(typeData: CreateTypeDto): Promise<TypeEntity> {
    return await this.repository.save(typeData);
  }

  async readAll(): Promise<TypeEntity[]> {
    return await this.repository.find();
  }

  async readById(id: number): Promise<TypeEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, typeData: UpdateTypeDto) {
    return await this.repository.update(id, typeData);
  }

  async delete(id: number) {
    return await this.repository.softDelete(id);
  }
}
