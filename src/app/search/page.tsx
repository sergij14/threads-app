import PostList from '@/components/posts/PostList'
import { fetchPostsBySearchTerm } from '@/utils/db/queries/posts'
import { redirect } from 'next/navigation'

export default function page({ searchParams: { term } }: { searchParams: { term: string } }) {
    if (!term) redirect('/')

    return (
        <div className='col-span-3'>
            <h2 className='text-2xl font-bold mb-2'>Posts for {term}</h2>
            <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
        </div>
    )
}
