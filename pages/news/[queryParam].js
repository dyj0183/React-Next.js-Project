// create a dynamic page
// route: our-domain.com/news/dynamic-parameter-values

import { Fragment } from "react";
import { useRouter } from "next/router";

// standard React component goes here
const DetailPage = () => {
	const router = useRouter();

	const queryParam = router.query.queryParam;
	console.log(queryParam);

	return (
		<Fragment>
			<h1>News Detail Page!</h1>
			<p>{queryParam}</p>
		</Fragment>
	);
};

export default DetailPage;
