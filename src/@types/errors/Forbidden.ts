import { BaseError } from './BaseError';

export default class Forbidden extends BaseError {
  constructor (msg = 'Forbidden') {
    super(msg, 403);
  }
}
