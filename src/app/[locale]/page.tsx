// import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/navigation';

// export default function HomePage() {
//     const t = useTranslations('HomePage');
//     return (
//         <div>
//             <h1>{t('title')}</h1>
//             <Link href="/about">{t('about')}</Link>
//         </div>
//     );
// }


import Wrapper from "@/layouts/Wrapper";
import HomeOne from "../../components/homes/home-one/HomeOne";

export const metadata = {
  title: "PPM - Home",
};
const page = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default page