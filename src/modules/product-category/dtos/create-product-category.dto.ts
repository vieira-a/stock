import { IsNotEmpty } from 'class-validator';

export class CreateProductCategoryDto {
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  description: string;
}
