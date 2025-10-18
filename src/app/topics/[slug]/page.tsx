import PostCreateForm from '@/components/posts/PostCreateForm';
import PostList from '@/components/posts/PostList';
import { decodeString } from '@/utils/common';
import { fetchPostsByTopicSlug } from '@/utils/db/queries/posts';

export default async function TopicViewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug: slugParam } = await params;
    const slug = decodeString(slugParam);

    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className="col-span-3">
                <h2 className='text-2xl font-bold mb-2'>{slug}</h2>
                <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
            </div>
            <div className='mb-auto justify-self-end'>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    )
}
