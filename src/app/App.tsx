import PostManagerPage from "@pages/PostsManagerPage"
import Layout from "@shared/ui/Layout/Layout"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <PostManagerPage />
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}

export default App
