export class BaseError extends Error {
  statusCode: number;

  constructor (msg = '', code: number) {
    super(msg);
    this.statusCode = code;
  }
}
