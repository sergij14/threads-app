import React from 'react'
import TopicCreateForm from '@/components/topics/TopicCreateForm'
import TopicList from '@/components/topics/TopicList'
import { Divider } from '@/utils/ui'

function HomePage() {
  return <div className='grid grid-cols-4 gap-4'>
    <div className='col-span-3'>
      <h3 className='text-xl my-2'>Top Posts</h3>
    </div>
    <div className='flex flex-col border border-gray-200 p-4 rounded-2xl'>
      <TopicCreateForm />
      <Divider className='my-2' />
      <h3 className='text-lg mb-2'>Topics</h3>
      <TopicList />
    </div>
  </div>
}

export default HomePage