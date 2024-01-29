import { IsOptional } from 'class-validator';

export class UpdateTypeDto {
  @IsOptional()
  description: string;
}
