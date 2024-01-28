import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly logger: Logger,
  ) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      message = exception.message;
    } else if (exception.status) {
      httpStatus = exception.status;
      message = exception.message || 'Internal Server Error';
    }

    if (
      exception instanceof QueryFailedError &&
      exception.message.includes('unique constraint')
    ) {
      httpStatus = HttpStatus.CONFLICT;
      message = 'Registro duplicado. O recurso já existe.';
    }

    this.logger.error(
      `${request.method} ${request.originalUrl} ${httpStatus} error: ${message}`,
    );

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toLocaleTimeString(),
      message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
