"use client";
import { PostList } from './PostList'; 
import { Post } from './types';
import { useState, useCallback, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';                       
import PageButton from "./PageButton";

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

export default function Home(props: any) {
	const [numPage, setNumPage] = useState<number>(0);
	const [articles, setArticles] = useState<Post[]>([]);

	const requeteCallback = useCallback(
		async ()  => {
			const result = await requet(numPage);		
			setArticles(result);
		},
		[numPage]	
	);

	useEffect(() => {
		requeteCallback();
	}, [numPage]);

	return (
		<main>
			<Router>
				<Routes>
					{/* Route for the Blog Page */}
					<Route 
						path="/" 
						element={
							<>
								<h2>. BLOG .</h2>
								<PostList articles={articles} numPage={numPage} />
								<div className="flex justify-between px-5">
									<PageButton label={"<="} onClick={() => setNumPage(numPage - 1)} />
									<PageButton label={"=>"} onClick={() => setNumPage(numPage + 1)} />
								</div>
							</>
						}
					/>

					{/* Route for the test page */}
					<Route 
						path="/essai" 
						element={
							<Fragment>
								<h1>Page d'essai</h1>
							</Fragment>
						} 
					/>
				</Routes>
			</Router>
		</main>
	);
}
