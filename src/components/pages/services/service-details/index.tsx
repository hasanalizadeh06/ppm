import ScrollToTop from "@/components/common/ScrollToTop"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <main className="fix">
            <ServiceDetailsArea/>
         </main>
      </div>
   )
}

export default ServiceDetails
