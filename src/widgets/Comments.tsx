import { Comment } from "@entities/ui/Comment"
import { Button } from "@shared/ui"
import { Plus } from "lucide-react"

export const Comments = ({
  setNewComment,
  setShowAddCommentDialog,
  deleteComment,
  comments,
  highlightText,
  searchQuery,
  likeComment,
  postId,
  setSelectedComment,
  setShowEditCommentDialog,
}) => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <Button
          size="sm"
          onClick={() => {
            setNewComment((prev) => ({ ...prev, postId }))
            setShowAddCommentDialog(true)
          }}
        >
          <Plus className="w-3 h-3 mr-1" />
          댓글 추가
        </Button>
      </div>
      <div className="space-y-1">
        {comments[postId]?.map((comment) => (
          <Comment
            key={postId}
            comment={comment}
            highlightText={highlightText}
            searchQuery={searchQuery}
            likeComment={likeComment}
            postId={postId}
            setSelectedComment={setSelectedComment}
            setShowEditCommentDialog={setShowEditCommentDialog}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  )
}
