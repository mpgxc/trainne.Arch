interface IAppErrorDTO {
  statusCode?: number;
  message?: string;
}
class AppError extends Error {
  public statusCode: number;

  public message: string;

  constructor({ statusCode, message }: IAppErrorDTO) {
    super();
    this.message = message || 'Internal Server Error!';
    this.statusCode = statusCode || 500;
  }
}
export { AppError };
