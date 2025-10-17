import { db } from "@/utils/db";
import { auth } from "@/utils/auth";
import paths from "@/utils/paths";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const createPostSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(10)
})

interface CreatePostFormState {
    errors?: {
        title?: string[],
        content?: string[];
        _form?: string[]
    }
}

export const createPost = async (slug = '', formState: CreatePostFormState, formdata: FormData): Promise<CreatePostFormState> => {
    const result = createPostSchema.safeParse({
        title: formdata.get('title'),
        content: formdata.get('content')
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

    let post: Post;
    try {
        const topic = await db.topic.findFirst({
            where: { slug }
        })

        if (!topic) {
            return {
                errors: {
                    _form: ["Can not find topic"]
                }
            }
        }

        post = await db.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                userId: session.user.id || '',
                topicId: topic.id
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

    revalidatePath(paths.topicView(slug))
    redirect(paths.postView(slug, post.id))
}