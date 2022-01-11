import "./Header.css";
import MainNav from "./MainNav";
import Logo from "./Logo";

//header component containing logo and main navigation components
const Header = () => {
  return (
    <header>
      <Logo />
      <MainNav />
    </header>
  );
};
export default Header;
