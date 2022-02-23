// route: our-domain.com/news, the folder and file name will match the route

import { Fragment } from "react";
// use this for linking to different pages in NextJS, Link keeps this as a single page app
import Link from 'next/link';

// standard React component goes here
const NewsPage = () => {
	return (
		<Fragment>
			<h1>Welcome to Yu-Chun News Page!</h1>
			<ul>
				<li><Link href="/news/nextjs-framework">NextJS Is A Cool Full-Stack Framework</Link></li>
				<li>Fun News Here</li>
			</ul>
		</Fragment>
	);
};

export default NewsPage;
