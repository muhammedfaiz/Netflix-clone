import { navAvatar,netflixLogo } from "../constants/constants";
import "./Navbar.css";

const Navbar = ()=>{
    return(
        <div className="navbar">
            <img className="logo" src={netflixLogo} alt="Netflix" />
            <img className="avatar" src={navAvatar} alt="Avatar" />
        </div>
    )
}

export default Navbar;