import { IsOptional } from 'class-validator';

export class UpdateUnitDto {
  @IsOptional()
  acronym: string;

  @IsOptional()
  description: string;
}
