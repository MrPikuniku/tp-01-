import { Post } from "@/app/types";
import { Link } from "react-router-dom";

type ListingArticlesProps = { articles: Post[]}

export default function ListingArticles({ articles }: ListingArticlesProps) {
	return (
        <div className="grid grid-cols-3 gap-5 p-5">
            {articles.map((post) => (
                <div key={post.id} className="size-62 bg-slate-100 border-2 border-slate-300 p-5 rounded-lg">
                    <Link to={`/article/${post.id}`}><img src={post.cover_image} className="rounded-lg pb-5" /></Link>
                    <Link to={`/article/${post.id}`}><h1 className="text-xl underline font-bold">{post.title}</h1></Link>
                    <p className='italic text-slate-500 py-5'>{post.description}</p>
                    <p className="text-right underline">Published {dateLisible(post.created_at)}</p>
                </div>
            ))}
        </div>
    );
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

const ajoutZero = (valeur: number) => {
    if(valeur < 10) {
        return `0${valeur}`
    }
    return valeur;
}