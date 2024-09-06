



import dynamic from "next/dynamic";
import { PostList } from './PostList'; 
import { Post } from './types';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, use } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';                       

async function requet(page: number): Promise<Post[]> {
	const urlParameters = new URLSearchParams({
		page: (page ?? 1).toString(),
		per_page: '6',
		orderBy: 'date',
	});
	try {
		const result = await fetch(`https://dev.to/api/articles?${urlParameters}`);
		return await result.json();
	} catch (error) {
		console.error(error);
		return [];
	}
}
export default async function Home(props: any) {
	let numPage = props.searchParams?.page || '1';
	numPage = parseInt(numPage);

	const articles = await requet(numPage);

	return (
		<main>
			<h2>. BLOG .</h2>
			<PostList articles={articles} numPage={numPage} />	
		</main>
	);
}





