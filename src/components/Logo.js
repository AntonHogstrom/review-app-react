import image from "../images/gamereview.png";
import "./Logo.css";

//logo component
const Logo = () => {
  return (
    <div id="LogoDiv">
      <img src={image} alt="logo" className="LogoImg" />
    </div>
  );
};

export default Logo;
