  import Image from "next/image"
  import Link from "next/link"

  import logo from "@/assets/about/4.png";
  import NavMenu from "./NavMenu";

  interface MobileSidebarProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
  }
  const MobileSidebar = ({ isActive, setIsActive }: MobileSidebarProps) => {

    return (
      <div className={isActive ? "mobile-menu-visible" : ""}>
        <div className="tgmobile__menu" style={{backgroundColor: "#0171bd"}}>
          <nav className="tgmobile__menu-box">
            <div onClick={() => setIsActive(false)} className="close-btn"><i className="tg-flaticon-close"></i></div>
            <div className="nav-logo">
              <Link href="/"><Image style={{maxWidth:230}} width={100} height={100} src={logo} alt="Logo" /></Link>
            </div>
            <div className="tgmobile__menu-outer">
              <NavMenu />
            </div>
            {/* <div className="social-links">
              <ul className="list-wrap">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div> */}
          </nav>
        </div>
        <div className="tgmobile__menu-backdrop" onClick={() => setIsActive(false)}></div>
      </div>
    )
  }

  export default MobileSidebar

