import { db } from "@/db";
import { auth } from "@/utils/auth";
import paths from "@/utils/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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

    const session = await auth();
    if (!session || !session?.user) {
        return {
            errors: {
                _form: ['You must be signed in']
            }
        }
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })

    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        }

        return {
            errors: {
                _form: ['Something went wrong']
            }
        }

    }

    revalidatePath('/')
    redirect(paths.topicView(topic.slug))
}