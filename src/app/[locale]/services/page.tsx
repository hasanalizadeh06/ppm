import Service from "@/components/pages/services/service";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "PPM - Services",
};
const page = () => {
   return (
      <Wrapper>
         <Service />
      </Wrapper>
   )
}

export default page