'use client'
import React, { useActionState } from 'react'
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent, Alert } from '@/utils/ui'
import { createTopic } from '@/actions'

function TopicCreateForm() {
    const [formstate, action] = useActionState(createTopic, {
        errors: {}
    });

    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary' variant='flat'>Create a Topic</Button>
            </PopoverTrigger>

            <PopoverContent>
                <form action={action} noValidate>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-xl'>Create a Topic</h3>
                        <Input name='name' label="Name" labelPlacement='outside' placeholder='Name'
                            isInvalid={!!formstate.errors?.name} errorMessage={formstate.errors?.name?.join(', ')} />
                        <Textarea name='description' label="Description" labelPlacement='outside' placeholder='Descriptiin'
                            isInvalid={!!formstate.errors?.description} errorMessage={formstate.errors?.description?.join(', ')} />

                        {formstate.errors?._form ? <Alert color="danger" title={formstate.errors?._form.join(', ')} /> : null}
                        <Button type='submit'>Create</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}

export default TopicCreateForm