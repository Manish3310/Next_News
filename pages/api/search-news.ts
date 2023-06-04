// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsResponse } from '@/models/NewsArticle';
import { NextApiRequest, NextApiResponse } from 'next';
//import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const searchQuery=req.query.q?.toString();

  if(!searchQuery){
    res.status(400).json({error:"Error occured while loading this Page"})
  }

  const response= await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`);
  const newsResponse:NewsResponse=await response.json();
  
  res.status(200).json(newsResponse.articles)
}
