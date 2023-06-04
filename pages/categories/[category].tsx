import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle } from "@/models/NewsArticle";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

interface CategoryNewspageProps{
    newsArticles:NewsArticle[],
}

export const getStaticPaths: GetStaticPaths=async()=>{
    const categorySlugs=[
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ];

    const paths=categorySlugs.map(slugs=>({params:{category:slugs}}));

    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps: GetStaticProps<CategoryNewspageProps>=async({params})=>{
    const category=params?.category?.toString();
    const response=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
    const newsResponse=await response.json();

    return {
        props:{newsArticles:newsResponse.articles},
        revalidate:5*60
    }

}


const CategoryNewspage = ({newsArticles}:CategoryNewspageProps) => {
    const router=useRouter();
    const categoryName=router.query.category?.toString();

    const title="Category: " + categoryName;


    return ( 
        <>
        <Head><title key="title">{`${title}-NextJS News`}</title></Head>
        <main>
            <h1>{title}</h1>
            <NewsArticlesGrid articles={newsArticles}/>
        </main>


        </>
     );
}
 
export default CategoryNewspage;