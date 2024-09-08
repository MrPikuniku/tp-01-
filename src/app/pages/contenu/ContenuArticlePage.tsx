import { useCallback, useEffect, useState } from "react";
import PageButton from "../../PageButton";
import { PostList } from "../../PostList";
import { Post } from "../../types";
import { useParams } from "react-router-dom";
import getArticleById from "@/api/get-article-by-id";
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import { document } from "postcss";
import ReactDOM from "react-dom";
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';





export default function ContenuArticle() {

	const params = useParams();
	const [article, setArticle] = useState<Post|null>()
	const [chargement, setChargement] = useState<boolean>();

	useEffect(() => {
		if(params.id) {
			setChargement(true); 
			getArticleById(params.id)
				.then((article) => { setArticle(article); })
				.finally(() => { setChargement(false)} )
		}
	}, [params])

	const ajoutZero = (valeur: number) => {
		if(valeur < 10) {
			return `0${valeur}`
		}
		return valeur;
	}

	const dateLisible = (dateString: string) => {
		const date = new Date(dateString);
		const day = ajoutZero(date.getDate());
		const month = ajoutZero(date.getMonth());
		const year = date.getFullYear();
		const hours = ajoutZero(date.getHours());
		const minutes = ajoutZero(date.getMinutes());
 

		return `${day}-${month}-${year} @ ${hours}:${minutes}`;
	}

	
	return (
		<>
		{chargement &&
			<div className="text-yellow-600 text-xl">Chargement...</div>
		}

		{(chargement == false && article == null) &&
			<div className="text-red-300 text-xl">Article non trouvé</div>
		} 
		
		{(chargement == false && article !=null) && 
			<div className="p-10">
				<img src={article.cover_image} className="rounded-lg pb-5" />
				<h1 className="text-2xl">{article.title}</h1>
				<p className='italic text-slate-500 py-5'> {article.description}</p>
				<p className="text-right underline"> {dateLisible(article.created_at)} </p>
				{parse(article.body_html)}
			</div>
		}
		</>
	)

}






