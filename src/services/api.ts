import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Definindo a interface para os dados da resposta
interface ResponseData {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author: string
  title: string
  description: any
  url: string
  urlToImage: any
  publishedAt: string
  content: any
}

export interface Source {
  id: string
  name: string
}


const useApi = () => {
  const [url, setUrl] = useState('');

  const { data: getResponse, isLoading: isGetLoading, error: getError } = useQuery<ResponseData>(
    ['getData'],
    () => axios.get(url).then((response) => response.data),
    {
      enabled: false,
      retry: 1,
      retryDelay: 1000,
      onError: (error) => {
        console.error('Erro na requisição GET:', error);
      },
      onSuccess: () => {
        console.log('Requisição GET bem-sucedida!');
      },
      onSettled: () => {
        console.log('Requisição GET finalizada!');
      },
    }
  );

  // Função para realizar uma requisição GET
  const get = () => {
    setUrl(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&country=br&category=technology`);
  };

  return {
    getResponse,
    isGetLoading,
    getError,
    get,
  };
};

export default useApi;
