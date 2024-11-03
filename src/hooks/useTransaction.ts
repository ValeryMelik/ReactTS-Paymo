/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import postTransaction from '../API/requests/postTransaction';
import generateHashSum from '../utils/generateHashSum';
import { api_key } from '../API';
import { nanoid } from 'nanoid';

interface ITransactionInput {
  amount: number;
  custom_data?: Record<string, any>;
}

const useTransaction = (): UseMutationResult<any, Error, ITransactionInput> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ amount, custom_data }: ITransactionInput) => {
      const transaction = nanoid();

      const hash_sum = generateHashSum(transaction, amount);

      const payload = {
        api_key,
        hash_sum,
        transaction,
        description: 'Оплата услуги',
        amount,
        custom_data,
      };

      try {
        return await postTransaction(payload);
      } catch (error) {
        return Promise.reject({ error, payload });
      }
    },
    onError: (error: any): void => {
      navigate('/ReactTS-Paymo/transaction-error', {
        state: { payload: error.payload, error: error.error },
      });
    },
  });
};

export default useTransaction;
