'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { Button, Textarea } from '@/utils/ui';
import { createComment } from '@/actions';

interface CommentCreateFormProps {
    postId: string;
    parentId?: string;
    startOpen?: boolean;
}

export default function CommentCreateForm({
    postId,
    parentId,
    startOpen,
}: CommentCreateFormProps) {
    const [open, setOpen] = useState(startOpen);
    const ref = useRef<HTMLFormElement | null>(null);
    const [formState, action, isPending] = useActionState(
        createComment.bind(null, { postId, parentId }),
        { errors: {} }
    );

    useEffect(() => {
        if (formState.success) {
            ref.current?.reset();

            if (!startOpen) {
                setOpen(false);
            }
        }
    }, [formState, startOpen]);

    const form = (
        <form action={action} ref={ref} noValidate>
            <div className="space-y-2 px-1 mt-2">
                <Textarea
                    name="content"
                    label="Reply"
                    labelPlacement="inside"
                    placeholder="Enter your comment"
                    isInvalid={!!formState.errors.content}
                    errorMessage={formState.errors.content?.join(', ')}
                />

                {formState.errors._form ? (
                    <div className="p-2 bg-red-200 border rounded border-red-400">
                        {formState.errors._form?.join(', ')}
                    </div>
                ) : null}

                <Button type='submit' isLoading={isPending}>Create Comment</Button>
            </div>
        </form>
    );

    return (
        <div className='mt-4'>
            <Button size="sm" variant="light" onClick={() => setOpen(!open)}>
                Reply
            </Button>
            {open && form}
        </div>
    );
}
