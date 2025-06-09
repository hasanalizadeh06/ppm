import ScrollToTop from "../common/ScrollToTop"
import AboutArea from "./AboutArea"

const About = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <main className="fix">
            <AboutArea />
         </main>
      </div>
   )
}

export default About
