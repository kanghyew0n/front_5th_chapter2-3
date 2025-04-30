import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { DialogHeader } from "@shared/ui"
import { Comments } from "@widgets/Comments"

export const PostDetailDialog = ({
  comments,
  showPostDetailDialog,
  setShowPostDetailDialog,
  selectedPost,
  highlightText,
  searchQuery,
  setNewComment,
  setShowAddCommentDialog,
  deleteComment,
  likeComment,
  setSelectedComment,
  setShowEditCommentDialog,
}) => {
  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          <Comments
            comments={comments}
            setNewComment={setNewComment}
            setShowAddCommentDialog={setShowAddCommentDialog}
            deleteComment={deleteComment}
            highlightText={highlightText}
            searchQuery={searchQuery}
            likeComment={likeComment}
            postId={selectedPost?.id}
            setSelectedComment={setSelectedComment}
            setShowEditCommentDialog={setShowEditCommentDialog}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
