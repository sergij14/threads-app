import { db } from "@/utils/db";
import { notFound } from "next/navigation";

export default async function PostView({ postId }: { postId: string }) {
    const post = await db.post.findFirst({
        where: { id: postId }
    })

    if (!post) return notFound();

    return (
        <div className='mt-2 flex flex-col gap-2'>
            <h4 className='text-lg font-bold'>{post.title}</h4>
            <p className="border border-gray-200 p-4">{post.content}</p>
        </div>
    )
}
