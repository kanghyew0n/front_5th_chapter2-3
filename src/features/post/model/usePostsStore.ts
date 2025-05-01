import { create } from "zustand"

// Post 타입 분리
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

// 상태 타입
type PostsState = {
  posts: Post[]
}

// 액션 타입
type PostActions = {
  setPosts: (posts: Post[]) => void
  addPost: (post: Post) => void
  clearPosts: () => void
}

// Zustand 스토어 타입
type PostsStore = PostsState & PostActions

// Zustand 스토어 정의
export const usePostStore = create<PostsStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  clearPosts: () => set({ posts: [] }),
}))
