// components/ArticleList.js
import Article from './Article';

const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
