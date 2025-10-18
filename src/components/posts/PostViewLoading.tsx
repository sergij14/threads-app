import { Skeleton } from "@/utils/ui";

export default function PostViewLoading() {
    return (
        <div className='mt-2 flex flex-col gap-2'>
            <Skeleton className="h-8 w-48 mb-2 rounded-xs"></Skeleton>
            <div className="flex gap-1 border flex-col border-gray-200 p-4">
                <Skeleton className="h-4 w-32"></Skeleton>
                <Skeleton className="h-4 w-36"></Skeleton>
                <Skeleton className="h-4 w-40"></Skeleton>
            </div>

        </div>
    )
}
