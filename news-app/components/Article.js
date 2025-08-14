// components/Article.js
import Link from 'next/link';

const Article = ({ article }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link href={`/articles/${article.id}`}>Read More</Link>
        </div>
    );
};

export default Article;
