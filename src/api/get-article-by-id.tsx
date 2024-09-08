import { Post } from "@/app/types";

export default async function getArticleById(id: string|number ): Promise<Post | null> {
	
	try {
        console.log("Fetch" ,`https://dev.to/api/articles/${id}`);
		const result = await fetch(`https://dev.to/api/articles/${id}`);
		const data = await result.json();
        console.log({data});
        return data;
	} catch (error) {
		console.error(error);
        return null;
	}
}