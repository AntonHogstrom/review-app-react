import image from "../images/dog.jpg";
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
