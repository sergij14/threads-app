import React from 'react'
import TopicCreateForm from '@/components/topics/TopicCreateForm'

function HomePage() {
  return <div className='grid grid-cols-4 gap-4'>
    <div className='col-span-3'>
      <h3 className='text-xl my-2'>Top Posts</h3>
    </div>
    <div className='flex justify-end'>
      <TopicCreateForm />
    </div>
  </div>
}

export default HomePage