// create a dynamic page
// route: our-domain.com/news/dynamic-parameter-values

import { useRouter } from 'next/router';

// standard React component goes here
const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId; 
    console.log(newsId);

    return <h1>News Detail Page!</h1>
};

export default DetailPage;