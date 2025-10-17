import { db } from '@/utils/db';
import paths from '@/utils/paths';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function PostViewPage({ params }: { params: Promise<{ postId: string, slug: string }> }) {
    const { postId, slug } = await params;
    const post = await db.post.findFirst({
        where: { id: postId }
    })

    if (!post) return notFound();

    return (
        <div>
            <Link href={paths.topicView(slug)}>
                {'< '}Back to {slug}
            </Link>
            <div className='mt-2'>
                <h4 className='text-lg font-bold'>{post.title}</h4>
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default PostViewPage