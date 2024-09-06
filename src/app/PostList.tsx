
"use client";

import { Post } from './types';

export function PostList({ articles, numPage }: { articles: Post[], numPage: number }) {
	return (
		<>
			<div className="grid grid-cols-3 gap-5">
				{articles.map((post) => (
					<div key={post.id} className="size-62 bg-blue-400 rounded-lg">
						<img src={post.cover_image} className="rounded-lg" />
						<p><b>{post.title}</b></p>
						<p>{post.description}</p>
						<p className="text-center">Published {post.created_at}</p>
					</div>
				))}
			</div>
			<div className="content-center">
				<a
					href={`/?page=${numPage - 1}`}
					className="absolute h-25 w-20 px-40 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 left-0"
				>
					Page précédente
				</a>
				<a
					href={`/?page=${numPage + 1}`}
					className="absolute h-25 w-20 px-40 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 right-0"
				>
					Page suivante
				</a>
			</div>
		</>
	);
}







