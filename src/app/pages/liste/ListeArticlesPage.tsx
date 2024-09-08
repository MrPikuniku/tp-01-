
"use client";

import { useCallback, useEffect, useState } from "react";
import { Post } from "../../types";
import getArticles from "@/api/get-articles";
import ListingArticles from "./ListingArticles";
import PageButton from "@/app/PageButton";



/**
 * Affiche la liste des articles
 * 
 * @returns 
 */
export function ListeArticlesPage() {

	
    const [numPage, setNumPage] = useState<number>(0);
	const [articles, setArticles] = useState<Post[]>([]);

	const requeteCallback = useCallback(
		async ()  => {
			const result = await getArticles(numPage);		
			setArticles(result);
		},
		[numPage]	
	);

	useEffect(() => {
		requeteCallback();
	}, [numPage]);


	return (
		<>
			 <ListingArticles  articles={articles} />
			 <div className="flex justify-between px-5">
				 <PageButton label={"<="} onClick={() => setNumPage(numPage - 1)} />
				 <PageButton label={"=>"} onClick={() => setNumPage(numPage + 1)} />
			 </div>
		 </>
	);
}







