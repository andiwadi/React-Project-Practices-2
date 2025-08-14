// pages/articles/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../../components/Header';

const ArticleDetails = () => {
    const [article, setArticle] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchArticle = async () => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setArticle(response.data);
            };

            fetchArticle();
        }
    }, [id]);

    if (!article) {
        return <div>Loading...</div>; // نمایش بارگذاری در حین دریافت داده‌ها
    }

    return (
        <div>
            <Header />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    );
};

export default ArticleDetails;
