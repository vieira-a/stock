import { IsOptional } from 'class-validator';

export class UpdateProductTypeDto {
  @IsOptional()
  description: string;
}
