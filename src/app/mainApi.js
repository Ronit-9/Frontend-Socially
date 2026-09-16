import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Export base URL from env
export const BASE_URL = import.meta.env.VITE_BASE_URL; // Vite
// export const BASE_URL = process.env.REACT_APP_BASE_URL; // CRA

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Post', 'User'],
  endpoints: () => ({}),
});
