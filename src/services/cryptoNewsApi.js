import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsheaders = {
    'X-RapidAPI-Key': '3fe1fe0973msh820bd2055f350f4p102b5ajsna05ffa7bb447',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  };

const baseUrl =  'https://crypto-news-live3.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsheaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/news?limit=${count}`),
        }),
    }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;