// pages/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const articlesWithId = response.data.map(article => ({ ...article, id: article.id }));
            setArticles(articlesWithId);
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <Header />
            <h1>Latest Articles</h1>
            <ArticleList articles={articles} />
        </div>
    );
};

export default Home;
