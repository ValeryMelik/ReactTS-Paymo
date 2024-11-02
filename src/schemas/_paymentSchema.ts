import { z } from 'zod';
import validateLuhn from '../utils/validateLuhn';

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, ''))
    .refine((val) => val.length === 16, { message: 'Введите номер карты' })
    .refine((val) => /^\d+$/.test(val), { message: 'Введите номер карты' })
    .refine(validateLuhn, { message: 'Неверный номер карты' }),

  expirationDate: z
    .string()
    .transform((val) => val.replace(/\s/g, ''))
    .refine((val) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(val), {
      message: 'Введите срок',
    }),

  cvv: z
    .string()
    .transform((val) => val.replace(/\s/g, ''))
    .refine((val) => val.length === 3, { message: 'Введите CVV' })
    .refine((val) => /^\d+$/.test(val), { message: 'Введите CVV' }),

  amount: z
    .string()
    .min(1, { message: 'Введите сумму' })
    .refine((val) => +val >= 10, { message: 'Минимальная сумма — 10 ₽' }),

  name: z.string().max(50, { message: 'Имя не должно превышать 50 символов' }),

  message: z
    .string()
    .max(50, { message: 'Сообщение не должно превышать 50 символов' })
    .optional(),
});

export type TPayment = z.infer<typeof paymentSchema>;
