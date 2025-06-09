import ScrollToTop from "@/components/common/ScrollToTop"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <main className="fix">
            <BlogArea />
         </main>
      </div>
   )
}
export default Blog
