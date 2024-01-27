import { useEffect, useState } from "react";
import NewsItem from "./Newsitem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ce4fd9a151484caab7982a9aff455260`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setArticles(data.articles));
    }, [category]);

    return (
        <div className="container">
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            <div className="row">
                {articles.map((news, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <NewsItem
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsBoard;
