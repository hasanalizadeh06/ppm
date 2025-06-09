interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
      mega_menu?: {
         link: string;
         title: string;
      }[];
   }[];
};

const menu_data: MenuItem[] = [
   // home
   // about
   // service
   // howItWorks
   // contact
   {
      id: 1,
      has_dropdown: false,
      title: "about",
      link: "about",
   },
   {
      id: 2,
      has_dropdown: false,
      title: "services",
      link: "services",
   },
   {
      id: 3,
      has_dropdown: false,
      title: "blog",
      link: "blogs",
   },
   {
      id: 4,
      has_dropdown: false,
      title: "faq",
      link: "faq",
   },
   {
      id: 5,
      has_dropdown: false,
      title: "contact",
      link: "contact",
   },

];
export default menu_data;