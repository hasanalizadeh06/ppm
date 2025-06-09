import ScrollToTop from "@/components/common/ScrollToTop"
import HomePage from "@/components/pages/Home/HomePage"

const HomeOne = () => {
   return (
      <div className="theme-blue">
         <ScrollToTop />
         <main className="fix">
            <HomePage />
         </main>
      </div>
   )
}

export default HomeOne
