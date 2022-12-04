import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";

const AccountComponent = () => {
  return (
    <Link to="/account">
      <Button className="ml-4">
        Your Account
        <MdAccountBox id="brokenHeart" className="ml-2" />
      </Button>
    </Link>
  );
};

export default AccountComponent;
