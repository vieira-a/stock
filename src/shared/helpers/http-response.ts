import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export const createdSuccess = (res: Response) => {
  return res
    .status(HttpStatus.CREATED)
    .json({ message: 'Registro criado com sucesso' });
};

export const readSuccess = <T>(res: Response, data: T) => {
  return res.status(HttpStatus.OK).json({ data });
};

export const updatedSuccess = (res: Response) => {
  return res
    .status(HttpStatus.OK)
    .json({ message: 'Registro atualizado com sucesso' });
};

export const deletedSuccess = (res: Response) => {
  return res
    .status(HttpStatus.OK)
    .json({ message: 'Registro excluido com sucesso' });
};
