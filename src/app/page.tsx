import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

type Post = {
	id: number;
	title: string;
	description: string;
	cover_image: string;
	created_at: string;
}

async function requet() {
	
	try {
		// J'attend la fin de mon fetch et stoque le résultat en variable
		const result = await fetch("https://dev.to/api/articles");
		const decodedJSON = await result.json() as Post[] ;
		console.log(decodedJSON);
		return decodedJSON;
    // Si mon fetch est OK, je continue ici
	} 
	catch (error) {
		// Si mon fetch échoue, j'arriverai ici directement
		console.error(error);
    	return [];
	}

}


export default async function Home() {
	
  const  articles = await requet(); 
  
  return (<main><pre> 
	
	</pre>
	
	
	
	
	 <div className = "grid grid-cols-3 gap-2" >
		
		{articles.map((post) => 
		<div className = "size-62" >
			<img src={post.cover_image}/>





		</div>
	)}
	</div>

</main>);
}


