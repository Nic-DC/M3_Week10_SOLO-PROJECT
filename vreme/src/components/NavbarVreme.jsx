import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import logo from "../assets/sun.png";

const NavbarVreme = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <Image src={logo} rounded id="logoImg" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search city weather" className="mr-sm-2" />
          <Button variant="outline-warning">Search Cities</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavbarVreme;
