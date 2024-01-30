import { IsNotEmpty, Length } from 'class-validator';

export class CreateUnitDto {
  @Length(2, 2, { message: 'Sigla precisa ter 2 caracteres' })
  @IsNotEmpty({ message: 'Sigla é obrigatória' })
  acronym: string;

  @Length(3, 60, { message: 'Descrição precisa ter de 3 a 60 caracteres' })
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  description: string;
}
