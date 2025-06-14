"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const NavMenu = () => {
   const t = useTranslations("Navbar");
   const currentRoute = usePathname();

   const isMenuItemActive = (menuLink: string) => {
      return currentRoute === menuLink;
   };

   const isSubMenuItemActive = (subMenuLink: string) => {
      return currentRoute === subMenuLink;
   };

   return (
      <ul className="navigation">
         {menu_data.map((menu) => (
            <li key={menu.id} className={menu.sub_menus ? "menu-item-has-children" : ""}>
               <Link href={menu.link}
                  className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                  {t(menu.title)}
               </Link>
               {menu.has_dropdown && (
                  <>
                     {menu.sub_menus && (
                        <ul className="sub-menu">
                           {menu.sub_menus.map((sub_m, i) => (
                              <li key={i} className={sub_m.mega_menu ? "menu-item-has-children" : ""}>
                                 <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                    {sub_m.title}
                                 </Link>
                                 {sub_m.mega_menu && (
                                    <ul className="sub-menu">
                                       {sub_m.mega_menu.map((mega_m, i) => (
                                          <li key={i}>
                                             <Link href={mega_m.link} className={`${mega_m.link && isSubMenuItemActive(mega_m.link) ? "active" : ""}`}>
                                                {mega_m.title}
                                             </Link>
                                          </li>
                                       ))}
                                    </ul>
                                 )}
                              </li>
                           ))}
                        </ul>
                     )}
                  </>
               )}
            </li>
         ))}
      </ul>
   );
};

export default NavMenu;