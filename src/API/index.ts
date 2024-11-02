import { QueryClient } from '@tanstack/react-query';

import axios from 'axios';

export const queryClient = new QueryClient();

export const api_key = '316b2be8-3475-4462-bd57-c7794d4bdb53';

export const secret_key = '1234567890';

export const apiClient = axios.create({
  baseURL: 'https://XXXXXXXXXXXXXX.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
