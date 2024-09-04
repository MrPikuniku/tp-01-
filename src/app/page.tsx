import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

type Post = {
	id: number;
	title: string;
	description: string;
	cover_image: string;
	created_at: string;
}

async function requet(page:number) {
	const urlParameters = new URLSearchParams({
		page: (page ?? 1).toString(),
		per_page: '6',
		orderBy: 'date',
	});
	try {
		// J'attend la fin de mon fetch et stoque le résultat en variable
		const result = await fetch("https://dev.to/api/articles?"+urlParameters);
		const decodedJSON = await result.json() as Post[] ;
		return decodedJSON;
    // Si mon fetch est OK, je continue ici
	} 
	catch (error) {
		// Si mon fetch échoue, j'arriverai ici directement
		console.error(error);
    	return [];
	}

}


export default async function Home(props : object) {
	
	//console.log(props) /?page=${numPage+1}
	// faire une variable qui récupère le numéro de page stocké dans l'URL actuelle
	// @ts-ignore
	let numPage = props['searchParams']['page'];
	
	numPage = parseInt(numPage ?? '1');

	
	
	console.log(props);
	const  articles = await requet(numPage); 
	console.log(numPage);


  return (<main ><pre> 
	
	</pre>
	
	
	
	<h2>. BLOG .</h2>
	 <div className = "grid grid-cols-3 gap-5" >
		
		{articles.map((post) => 
		<div key={post.id} className = "size-62 bg-blue-400 rounded-lg "  >
			<img src={post.cover_image} className="rounded-lg" />
			
			<p><b>{post.title}</b></p>
			<p>{post.description}</p>
			<p className="text-center">Published {post.created_at}</p>

			


		</div>
	)}
	</div>
	<div className= "content-center"  >

		<a href= {`http://localhost:3000/?page=${numPage-1}`} className= "absolute h-25 w-20 px-40 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 left-0 ">Page précédente</a>
		<a href= {`http://localhost:3000/?page=${numPage+1}`} className= "absolute h-25 w-20 px-40 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 right-0" > Page suivante </a>
		
	
	</div>
</main>);
}





