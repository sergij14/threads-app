import { db } from "@/utils/db"
import paths from "@/utils/paths";
import { Chip } from "@/utils/ui"
import Link from "next/link";

async function TopicList() {
    const topics = await db.topic.findMany();

    return (
        <div className="flex gap-4">
            {topics.map(({ slug, id }) => <Link key={id} href={paths.topicView(slug)}>
                <Chip >{slug}</Chip>
            </Link>
            )}
        </div>
    )
}

export default TopicList