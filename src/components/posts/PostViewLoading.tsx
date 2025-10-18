import { Skeleton } from "@/utils/ui";

export default function PostViewLoading() {
    return (
        <div className='mt-4 border border-gray-200 p-4 rounded-3xl'>
            <Skeleton className="h-4 w-60 mb-2 rounded-xs"></Skeleton>
            <div className="flex gap-1 flex-col py-2">
                <Skeleton className="h-4 w-72"></Skeleton>
                <Skeleton className="h-4 w-64"></Skeleton>
                <Skeleton className="h-4 w-96"></Skeleton>
            </div>

        </div>
    )
}
