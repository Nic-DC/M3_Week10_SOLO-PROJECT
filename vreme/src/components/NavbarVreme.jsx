import { Navbar, Nav, Form, FormControl, Button, Image, Toast, ToastBody } from "react-bootstrap";
import logo from "../assets/sun-gif.gif";

import { SiFiles } from "react-icons/si";

const NavbarVreme = () => {
  return (
    <div id="logoAndTitle">
      <Image src={logo} rounded id="logoImg" className="mr-auto" />
      <strong className="text-light">NoughtyWeather.earth</strong>
    </div>
  );
};

export default NavbarVreme;
