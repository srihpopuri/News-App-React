import image from '../assets/news.jpeg';

const NewsItem = ({ title, description, src, url }) => {
    const cardBodyStyle = {
        height: "200px", 
    };
    return (
        <div className="card bg-dark text-light" style={{ maxWidth: "345px" }}>
            <img
                src={src ? src : image}
                style={{ height: "200px", width: "100%" }}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body" style={{ minHeight: "275px" }}>
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">
                    {description ? description.slice(0, 90) : "News is about today's events"}
                </p>
                <a href={url} className="btn btn-primary">
                    Read more
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
