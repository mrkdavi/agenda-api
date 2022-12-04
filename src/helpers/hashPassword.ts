import { createHmac } from 'crypto';

export default function hashPassword (password: string): string {
  return createHmac('sha256', password).digest('hex');
}
