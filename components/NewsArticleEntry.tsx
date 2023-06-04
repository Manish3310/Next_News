import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from "@/assets/images/news_img.png";
import styles from "@/styles/NewsArticleEntry.module.css";

interface NewsArticleEntryProps{
    article:NewsArticle,
}

const NewsArticleEntry = ({article:{title,description,url,urlToImage}}:NewsArticleEntryProps) => {
    const validImageUrl=(urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage:undefined;
    return ( 
        <a href={url}>
            <Card className="mb-4 ">
                <Image
                    src={validImageUrl || placeholderImage} 
                    width={500}
                    height={200}
                    alt="news article image"
                    className={`card-img-top ${styles.img_style}`}              
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
     );
}
 
export default NewsArticleEntry;