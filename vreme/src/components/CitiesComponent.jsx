import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiFiles } from "react-icons/si";

const CitiesComponent = () => {
  return (
    <Link to="/cities">
      <Button className="ml-4">
        Your Cities
        <SiFiles id="brokenHeart" className="ml-2" />
      </Button>
    </Link>
  );
};

export default CitiesComponent;
