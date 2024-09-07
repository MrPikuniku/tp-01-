
"use client";



import { Post } from './types';
/**
 * Affiche la liste des articles
 * 
 * @returns 
 */
export function PostList({ articles, numPage }: { articles: Post[], numPage: number }) {

	
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
			<div className="grid grid-cols-3 gap-5 p-5">
				{articles.map((post) => (
					<div key={post.id} className="size-62 bg-slate-100 border-2 border-slate-300 p-5 rounded-lg">
						<img src={post.cover_image} className="rounded-lg pb-5" />
						<p><b>{post.title}</b></p>
						<p className='italic text-slate-500 py-5'>{post.description}</p>
						<p className="text-right underline">Published {dateLisible(post.created_at)}</p>
					</div>
				))}
			</div>
			
		</>
	);
}







