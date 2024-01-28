import { HttpException, HttpStatus } from '@nestjs/common';

export class DataNotFoundException extends HttpException {
  constructor() {
    const errorMessage = 'Dados não encontrados';
    const errorResponse = {
      statusCode: HttpStatus.NOT_FOUND,
      message: errorMessage,
      error: 'Not Found',
    };
    super(errorResponse, HttpStatus.NOT_FOUND);
  }
}
