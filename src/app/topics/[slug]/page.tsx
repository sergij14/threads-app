import PostCreateForm from '@/components/posts/PostCreateForm';
import React from 'react'

async function TopicViewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className="col-span-3">
                <h2 className='text-2xl font-bold mb-2'>{slug}</h2>
            </div>
            <div className='flex flex-col border border-gray-200 p-4 rounded-2xl'>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    )
}

export default TopicViewPage