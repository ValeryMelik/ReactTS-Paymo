import { AxiosResponse } from 'axios';

export default function validateResponse(response: AxiosResponse): void {
  if (response.status >= 200 && response.status < 300) {
    return;
  } else {
    throw new Error(`HTTP error: ${response.status}`);
  }
}
