import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/NewsArticle'
import NewsArticleEntry from '@/components/NewsArticleEntry'
import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import NavBar from '@/components/NavBar'
import HomeLayout from '@/components/HomeLayout'

const inter = Inter({ subsets: ['latin'] })

interface BreakinNewsPageProps{
  newsArticles:NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakinNewsPageProps> = async () =>{

  const response=await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles }
  }

}

export default function BreakingNewsPage({newsArticles}:BreakinNewsPageProps) {
  return (
    <>
      <Head >
        <title key="title">Breaking News-Nextjs News</title>
      </Head>
      
      <main className="">
      
        <h1 >Breaking News</h1>
        <HomeLayout/>
        <NewsArticlesGrid articles={newsArticles} />      
      
      </main>
    </>
  )
}
