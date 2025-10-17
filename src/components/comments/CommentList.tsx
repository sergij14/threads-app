import { fetchCommentsByPostId } from '@/utils/db/queries/comments';
import CommentView from './CommentView';

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentView key={comment.id} commentId={comment.id} postId={postId} />
    );
  });

  return (
    <div className="space-y-3 mt-4">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
