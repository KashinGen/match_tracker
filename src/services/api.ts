import { ApiResponse } from '../types';
import { axiosInstance } from './axios';

export const api = {
  getMatches: () =>
    axiosInstance.get<ApiResponse>('/fronttemp').then((response) => {
      const matches = response.data.data?.matches;
      if (matches === undefined) throw new Error('Ошибка: не удалось загрузить информацию');
      return matches;
    }),
};
