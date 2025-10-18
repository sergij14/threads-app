import CommentCreateForm from '@/components/comments/CommentCreateForm';
import CommentList from '@/components/comments/CommentList';
import PostView from '@/components/posts/PostView';
import PostViewLoading from '@/components/posts/PostViewLoading';
import paths from '@/utils/paths';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function PostViewPage({ params }: { params: Promise<{ postId: string, slug: string }> }) {
    const { postId, slug } = await params;

    return (
        <div>
            <Link href={paths.topicView(slug)}>
                {'< '}Back to {slug}
            </Link>
            <Suspense fallback={<PostViewLoading />}>
                <PostView postId={postId} />
            </Suspense>
            <CommentCreateForm postId={postId} startOpen />
            <CommentList postId={postId} />
        </div>
    )
}
