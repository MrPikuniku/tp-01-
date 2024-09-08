import { Post } from "@/app/types";

export default async function getArticles(page: number): Promise<Post[]> {
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