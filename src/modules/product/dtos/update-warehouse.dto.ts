import { IsOptional } from 'class-validator';

export class UpdateWarehouseDto {
  @IsOptional()
  description: string;
}
