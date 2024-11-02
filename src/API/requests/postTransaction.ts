import { apiClient } from '../index'; // apiClient уже настроен с базовым URL
import type { TTransaction } from '../../schemas';
import validateResponse from '../utils/validateResponse';
import handleApiError from '../utils/handleApiError';

export default async function postTransaction(data: TTransaction) {
  try {
    const response = await apiClient.post('/transaction', data);

    validateResponse(response);

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}