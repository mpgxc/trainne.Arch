import { HttpStatusCode } from '../../infra/http/HttpStatusCode';

interface IAppErrorRequest {
  statusCode?: number;
  message?: string;
}

class AppError extends Error {
  public statusCode: number;

  public message: string;

  constructor({ statusCode, message }: IAppErrorRequest) {
    super(message);
    this.message = message || 'Erro inesperado no servidor interno!';
    this.statusCode = statusCode || HttpStatusCode.STATUS_INTERNAL_SERVER_ERROR;
  }
}
export { AppError };
