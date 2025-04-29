import PostManagerPage from "@pages/PostsManagerPage"
import Layout from "@widgets/ui/Layout"
import { BrowserRouter as Router } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Layout>
        <PostManagerPage />
      </Layout>
    </Router>
  )
}

export default App
