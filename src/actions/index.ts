'use server';
import * as auth from '@/utils/auth'
import z from 'zod';

export const signIn = async () => {
    return auth.signIn('github')
}

export const signOut = async () => {
    return auth.signOut()
}

export const createComment = async () => {
    // TODO: revalidate the postviewpage
}

export const createPost = async () => {
    // TODO: revalidate the topicviewpage
}

const createTopicSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(10)
})

interface CreateTopicFormState {
    errors?: {
        name?: string[],
        description?: string[]
    }
}

export const createTopic = async (formState: CreateTopicFormState, formdata: FormData): Promise<CreateTopicFormState> => {
    const result = createTopicSchema.safeParse({
        name: formdata.get('name'),
        description: formdata.get('description')
    })

    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors }
    }

    return {
        errors: {}
    }

    // TODO: revalidate the homepage
}