// import Wrapper from "@/layouts/Wrapper";
// import HomeOne from "../components/homes/home-one/HomeOne";
//
// export const metadata = {
//   title: "Logistex - Transport & Logistics React Next js Template",
// };
// const page = () => {
//   return (
//     <Wrapper>
//       <HomeOne />
//     </Wrapper>
//   )
// }
//
// export default page

import {redirect} from 'next/navigation';
import {defaultLocale} from '@/constants/locale';

export default function RootRedirect() {
    redirect(`/${defaultLocale}`);
}
