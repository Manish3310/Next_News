import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle } from "@/models/NewsArticle";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";





const SearchNewsPage = () => {

    const[searchResults,setsearchResults]= useState<NewsArticle[] | null>(null);
    const[searchResultsLoading,setsearchResultsLoading]=useState(false);
    const[searchResultsLoadingIsError,setsearchResultsLoadingIsError]=useState(false);



    async function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData=new FormData(e.target as HTMLFormElement);
        const searchQuery=formData.get("searchQuery")?.toString().trim();

        if(searchQuery){
            try {
                setsearchResults(null);
                setsearchResultsLoadingIsError(false);
                setsearchResultsLoading(true);
                const response=await fetch ("/api/search-news?q="+searchQuery);
                const articles:NewsArticle[]=await response.json();
                setsearchResults(articles);
                
            } catch (error) {
                console.error(error);
                setsearchResultsLoadingIsError(true);
            }
            finally{
                setsearchResultsLoading(false);
            }
        }
    }

    return ( 
        <>
            <Head><title key="title">Search News-Nextjs News</title></Head>
            <main>
                
                <h1>Search for the News</h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="search-input">
                        <Form.Label>Search Query</Form.Label>
                        <Form.Control
                        name="searchQuery"
                        placeholder="Eg: Politics, Sports, ...."
                        />
                    </Form.Group>
                    <Button className="mb-2" type="submit" disabled={searchResultsLoading}>Search</Button>
                </Form>
                <div className="d-flex flex-column align-items-center">
                    {searchResultsLoading && <Spinner animation="border"/>}
                    {searchResultsLoadingIsError && <p>Error Occured while Loading this News Page</p>}
                    {searchResults?.length===0 && <p>Nothing Found, please enter a valid search query</p>}
                    {searchResults && <NewsArticlesGrid articles={searchResults}/>}
                </div>
                
            </main>
        </>
     );
}
 
export default SearchNewsPage;