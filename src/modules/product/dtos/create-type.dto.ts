import { IsNotEmpty } from 'class-validator';

export class CreateTypeDto {
  @IsNotEmpty({ message: 'Descrição é obrigatória ' })
  description: string;
}
