import { IsNotEmpty } from 'class-validator';

export class CreateProductTypeDto {
  @IsNotEmpty({ message: 'Descrição é obrigatória ' })
  description: string;
}
