import { Table, TableBody } from "@shared/ui"
import { PostTableHeader } from "./PostTableHeader"
import { PostTableRow } from "./PostTableRow"

export const PostTable = ({
  posts,
  comments,
  highlightText,
  searchQuery,
  selectedTag,
  setSelectedTag,
  updateURL,
  setSelectedPost,
  setPosts,
  setComments,
  setShowPostDetailDialog,
  setSelectedUser,
  setShowUserModal,
  setShowEditDialog,
}) => {
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
