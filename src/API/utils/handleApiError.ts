import axios from 'axios';

export default function handleApiError(error: unknown): never {
  let errorMessage = 'Произошла ошибка';

  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || 'Сервер недоступен';
    console.error('Ошибка ответа сервера:', error.response?.data);
  } else {
    errorMessage = `Ошибка: ${(error as Error).message}`;
    console.error('Ошибка:', errorMessage);
  }

  throw new Error(errorMessage);
}
