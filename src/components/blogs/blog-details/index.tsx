import ScrollToTop from "@/components/common/ScrollToTop"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <main className="fix">
            <BlogDetailsArea />
         </main>
      </div>
   )
}

export default BlogDetails
