import { z } from 'zod';

export const transactionSchema = z.object({
  api_key: z.string(),
  hash_sum: z.string(),
  transaction: z.string(),

  description: z.string(),
  amount: z.number(),

  email: z.string().email().optional(),

  redirect_url: z.string().url().optional(),
  success_redirect: z.string().url().optional(),
  fail_redirect: z.string().url().optional(),

  custom_data: z.record(z.any()).optional(),
});

export type TTransaction = z.infer<typeof transactionSchema>;
