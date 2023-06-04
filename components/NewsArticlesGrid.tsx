import { NewsArticle } from "@/models/NewsArticle";
import { Col, Row } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticlesGridProps{
    articles:NewsArticle[],
}

const NewsArticlesGrid = ({articles}:NewsArticlesGridProps) => {
    return ( 
        <Row xl={3} xs={1} sm={2} className=" gap-52" >
            {articles.map(article=>(
                    <Col key={article.url} >
                    <NewsArticleEntry article={article}/>
                    </Col>
            ))}
            
        </Row>
     );
}
 
export default NewsArticlesGrid;