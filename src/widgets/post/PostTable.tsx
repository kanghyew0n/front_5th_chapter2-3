import { Table, TableBody } from "@shared/ui"
import { PostTableHeader } from "./PostTableHeader"
import { PostTableRow } from "@entities/ui/PostTableRow"
import { usePostsStore } from "@features/post/model/usePostsStore"

export const PostTable = ({
  comments,
  highlightText,
  searchQuery,
  selectedTag,
  setSelectedTag,
  updateURL,
  setSelectedPost,
  setComments,
  setShowPostDetailDialog,
  setSelectedUser,
  setShowUserModal,
  setShowEditDialog,
}) => {
  const { posts, setPosts } = usePostsStore()

  return (
    <Table>
      <PostTableHeader />
      <TableBody>
        {posts &&
          posts.map((post) => (
            <PostTableRow
              key={post.id}
              post={post}
              posts={posts}
              comments={comments}
              highlightText={highlightText}
              searchQuery={searchQuery}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              updateURL={updateURL}
              setSelectedPost={setSelectedPost}
              setPosts={setPosts}
              setComments={setComments}
              setShowPostDetailDialog={setShowPostDetailDialog}
              setSelectedUser={setSelectedUser}
              setShowUserModal={setShowUserModal}
              setShowEditDialog={setShowEditDialog}
            />
          ))}
      </TableBody>
    </Table>
  )
}
