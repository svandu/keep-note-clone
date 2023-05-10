import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Images/Logo.png";

import "./homepage.scss";

export default function HomePage() {
  return (
    <div className="header-bar-container">
      <div className="header-part-one">
        <MenuIcon />
        <img src={Logo} alt="Logo" className="logo-img" />
        <p className="logo-name">keep</p>
      </div>
      <div className="header-part-two">
        <input type="text" className="search-bar" />
      </div>
      <hr />
    </div>
  );
}
