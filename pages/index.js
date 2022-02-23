// route: our-domain.com

import { Fragment } from "react";
import Link from "next/link";
// standard React component goes here
const HomePage = () => {
	return (
		<Fragment>
			<h1>Welcome to Yu-Chun Home Page!</h1>
			<p>
				<Link href="/news/">My News Page</Link>
			</p>
		</Fragment>
	);
};

export default HomePage;
