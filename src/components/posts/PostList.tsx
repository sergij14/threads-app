import { PostWithData } from '@/utils/db/queries/posts'
import paths from '@/utils/paths';
import Link from 'next/link';
import React from 'react'

async function PostList({ fetchData }: { fetchData: () => Promise<PostWithData[]> }) {
    const posts = await fetchData();

    return (
        <div className='border border-gray-200 p-4 rounded-3xl'>
            {posts.map(({ id, _count: { comments }, content, title, user: { name }, topic }) => <div key={id}>
                <Link href={paths.postView(topic.slug, id)}>
                    <h4 className='text-lg font-bold'>{title}</h4>
                    <p>{content}</p>
                    <div className='flex gap-2'>
                        <span>{comments} comments</span>
                        <span>By {name}</span>
                    </div>
                </Link>
            </div>)}
        </div>
    )
}

export default PostList