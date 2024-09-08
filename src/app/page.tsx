"use client";
import { PostList } from './PostList'; 
import { Post } from './types';
import { useState, useCallback, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';                       
import PageButton from "./PageButton";
import { ListeArticlesPage } from './pages/liste/ListeArticlesPage';
import ContenuArticle from './pages/contenu/ContenuArticlePage';


export default function Home(props: any) {
	
	return (
		<main>
			<h2>. BLOG .</h2>

			<Router>
				<Routes>
					{/* Route for the Blog Page */}
					<Route path="/" >
						<Route path="" element={<ListeArticlesPage/>}></Route>
						<Route path="article/:id" element={<ContenuArticle/>}></Route>
					</Route>
				</Routes>
			</Router>
		</main>
	);
}
