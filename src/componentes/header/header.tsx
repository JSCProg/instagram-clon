import "./header.css";
import logoig from "../../assets/logoig.png";
import fotoperfilTp7 from "../../assets/fotoperfiltp7.png";

import {
  FaHome,
  FaSearch,
  FaCompass,
  FaRegHeart,
  FaRegPlusSquare,
  FaBars
} from "react-icons/fa";




import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FiSend } from "react-icons/fi";
{/* Estos iconos los sacamos de una ia*/}
function Header() {
  return (
    <aside className="header">
      <div className="header__logo">
       <img src={logoig} alt="" />
      </div>

      <nav className="header__menu">
        <button className="item-menu activo">
          <FaHome />
          <span>Home</span>
        </button>

        <button className="item-menu">
          <FaSearch />
          <span>Search</span>
        </button>

        <button className="item-menu">
          <FaCompass />
          <span>Explore</span>
        </button>

        <button className="item-menu">
          <MdOutlineSlowMotionVideo />
          <span>Reels</span>
        </button>

        <button className="item-menu">
          <FiSend />
          <span>Messages</span>
        </button>

        <button className="item-menu">
          <FaRegHeart />
          <span>Notifications</span>
        </button>

        <button className="item-menu">
          <FaRegPlusSquare />
          <span>Create</span>
        </button>

        <button className="item-menu">
          <img
          className="foto-perfil-menu"
          src= {fotoperfilTp7}
          alt="Perfil"
        />
          <span>Profile</span>
        </button>
      </nav>

      <button className="item-menu item-menu-final">
        <FaBars />
        <span>More</span>
      </button>
    </aside>
  );
}

export default Header;