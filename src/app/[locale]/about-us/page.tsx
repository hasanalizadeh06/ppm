import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "PPM - About",
};
const page = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default page