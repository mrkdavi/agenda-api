import { BaseError } from './BaseError';

export default class Conflict extends BaseError {
  constructor (msg = 'Conflict') {
    super(msg, 409);
  }
}
