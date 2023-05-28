import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Images/Logo.png";
import "./navbar.scss"

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="header-part-one">
        <MenuIcon className="hamburger-icon" />
        <img src={Logo} alt="Logo" className="logo-img" />
        <p className="logo-name">keep</p>
      </div>
      <div className="header-part-two">
        <input type="text" className="search-bar" />
      </div>
    </div>
  )
}
