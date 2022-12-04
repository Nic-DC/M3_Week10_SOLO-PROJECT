import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";

const Account = () => {
  return (
    <div>
      <h1>Your Cities</h1>
      <Link to="/">
        <Button>
          Go Back Home
          <RiHomeSmileFill id="brokenHeart" className="ml-2" />
        </Button>
      </Link>
    </div>
  );
};

export default Account;
