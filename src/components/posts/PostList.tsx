import { PostWithData } from '@/utils/db/queries/posts'
import paths from '@/utils/paths';
import { Divider } from '@/utils/ui';
import Link from 'next/link';

export default async function PostList({ fetchData }: { fetchData: () => Promise<PostWithData[]> }) {
    const posts = await fetchData();

    if (posts.length === 0) return 'No posts...'

    return (
        <div className='flex flex-col gap-4'>
            {posts.map(({ id, _count: { comments }, content, title, user: { name }, topic }) =>
                <div className='border border-gray-200 p-4 rounded-3xl' key={id}>
                    <Link href={paths.postView(topic.slug, id)}>
                        <h4 className='text-lg font-bold'>{title}</h4>
                        <p>{content}</p>
                        <Divider className='mt-2 mb-4' />
                        <div className='flex gap-2'>
                            <span>{comments} comments</span>
                            <span>By {name}</span>
                        </div>
                    </Link>
                </div>)}
        </div>
    )
}
