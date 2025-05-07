interface Post {
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
  author: {
    id: number
    username: string
    image: string
  }
}

interface Posts {
  limit: number
  posts: Omit<Post, "author">[] // author 없이 먼저 정의
  skip: number
  total: number
}

interface Users {
  id: number
  image: string
  username: string
}

interface PostsData {
  postsWithUsers: Post[]
  total: number
}

export const getPosts = async (limit: number, skip: number): Promise<PostsData | undefined> => {
  try {
    const postsData: Posts = await fetch(`/api/posts?limit=${limit}&skip=${skip}`).then((res) => res.json())
    const usersData: Users[] = await fetch("/api/users?limit=0&select=username,image")
      .then((res) => res.json())
      .then((data) => data.users)

    const postsWithUsers = postsData.posts.map((post) => ({
      ...post,
      author: usersData.find((user) => user.id === post.userId),
    }))

    return { postsWithUsers, total: postsData.total }
  } catch (error) {
    console.error("게시물 가져오기 오류:", error)
  }
}
