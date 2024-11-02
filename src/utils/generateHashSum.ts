import { SHA256 } from 'crypto-js';

import { api_key, secret_key } from '../API';

export default function generateHashSum(
  transaction: string,
  amount: number,
  apiKey: string = api_key,
  secretKey: string = secret_key
): string {
  return SHA256(
    `${apiKey}${transaction}${amount * 100}${secretKey}`
  ).toString();
}
