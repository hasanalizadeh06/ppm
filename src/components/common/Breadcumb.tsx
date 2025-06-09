import { ReactNode } from "react";

interface RootLayoutProps {
   children: ReactNode;
}

const Breadcumb = ({ children }: RootLayoutProps) => {
   return (
      <section className="rotation">
         {children}
      </section>
   )
}

export default Breadcumb
