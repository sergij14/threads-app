import z from "zod";

const createTopicSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(10)
})

interface CreateTopicFormState {
    errors?: {
        name?: string[],
        description?: string[];
        _form?: string[]
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