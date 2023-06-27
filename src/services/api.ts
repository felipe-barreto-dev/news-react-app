import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Root {
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


export const useNews = () => {
  return useQuery(["news"], async () => {
    return axios.get<Root>("https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=7be58569255242d4871ac1375f33027a").then((d: { data: Root; }) => d.data);
  });
};