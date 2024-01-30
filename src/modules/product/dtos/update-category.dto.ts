import { IsOptional } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  description: string;
}
