'use client'
import React, { useActionState } from 'react'
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent, Alert } from '@/utils/ui'
import { createPost } from '@/actions'

function PostCreateForm({slug}: {slug: string}) {
    const [formstate, action, isPending] = useActionState(createPost.bind(null, slug), {
        errors: {}
    });

    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary' variant='flat'>Create a post</Button>
            </PopoverTrigger>

            <PopoverContent>
                <form action={action} noValidate>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-xl'>Create a Post</h3>
                        <Input name='title' label="Title" labelPlacement='outside' placeholder='Title'
                            isInvalid={!!formstate.errors?.title} errorMessage={formstate.errors?.title?.join(', ')} />
                        <Textarea name='content' label="Content" labelPlacement='outside' placeholder='Content'
                            isInvalid={!!formstate.errors?.content} errorMessage={formstate.errors?.content?.join(', ')} />

                        {formstate.errors?._form ? <Alert color="danger" title={formstate.errors?._form.join(', ')} /> : null}
                        <Button isLoading={isPending} type='submit'>Create</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}

export default PostCreateForm