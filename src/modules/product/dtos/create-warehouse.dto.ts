import { IsNotEmpty } from 'class-validator';

export class CreateWarehouseDto {
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  description: string;
}
