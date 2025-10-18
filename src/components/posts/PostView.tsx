import { db } from "@/utils/db";
import { Divider } from "@/utils/ui";
import { notFound } from "next/navigation";

export default async function PostView({ postId }: { postId: string }) {
    await new Promise(res => setTimeout(res, 3000))
    const post = await db.post.findFirst({
        where: { id: postId }
    })

    if (!post) return notFound();

    return (
        <div className='mt-4 border border-gray-200 p-4 rounded-3xl' key={post.id}>
                <h4 className='text-lg font-bold'>{post.title}</h4>
                <p>{post.content}</p>
        </div>
    )
}
