import PostList from '@/components/posts/PostList'
import TopicCreateForm from '@/components/topics/TopicCreateForm'
import TopicList from '@/components/topics/TopicList'
import { fetchTopPosts } from '@/utils/db/queries/posts'
import { Divider } from '@/utils/ui'

function HomePage() {
  return <div className='grid grid-cols-4 gap-4'>
    <div className='col-span-3'>
      <h2 className='text-2xl font-bold mb-2'>Top Posts</h2>
      <PostList fetchData={() => fetchTopPosts()} />
    </div>
    <div className='flex flex-col border border-gray-200 p-4 rounded-2xl mb-auto'>
      <TopicCreateForm />
      <Divider className='my-2' />
      <h3 className='text-lg mb-2'>Topics</h3>
      <TopicList />
    </div>
  </div>
}

export default HomePage