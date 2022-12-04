import { Navbar, Nav, Form, FormControl, Button, Image, Toast, ToastBody } from "react-bootstrap";
import logo from "../assets/sun-1.png";

import { SiFiles } from "react-icons/si";

const NavbarVreme = () => {
  return (
    <div id="logoAndTitle">
      <Image src={logo} rounded id="logoImg" className="mr-auto" />
      <strong className="" id="title">
        NoughtyWeather.earth
      </strong>
    </div>
  );
};

export default NavbarVreme;
