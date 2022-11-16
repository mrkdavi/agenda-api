import { BaseError } from './BaseError';

export default class UnprocessableEntity extends BaseError {
  constructor (msg = 'Unprocessable Entity') {
    super(msg, 422);
  }
}
