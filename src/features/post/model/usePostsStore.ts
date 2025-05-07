import { create } from "zustand"

export interface Author {
  id: number
  username: string
  image: string
}

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
  author: Author
}

type PostsState = {
  posts: Post[]
}

type PostActions = {
  setPosts: (posts: Post[]) => void
}

type PostsStore = PostsState & PostActions

export const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}))
