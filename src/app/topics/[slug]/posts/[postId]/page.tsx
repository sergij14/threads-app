import PostView from '@/components/posts/PostView';
import paths from '@/utils/paths';
import Link from 'next/link';

async function PostViewPage({ params }: { params: Promise<{ postId: string, slug: string }> }) {
    const { postId, slug } = await params;

    return (
        <div>
            <Link href={paths.topicView(slug)}>
                {'< '}Back to {slug}
            </Link>
            <PostView postId={postId} />
        </div>
    )
}

export default PostViewPage