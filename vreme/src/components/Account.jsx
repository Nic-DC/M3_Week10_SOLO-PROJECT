import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { RiHomeSmileFill } from "react-icons/ri";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Your Account</h1>
      <Button onClick={() => navigate("/")}>
        Go Back Home
        <RiHomeSmileFill id="brokenHeart" className="ml-2" />
      </Button>
    </div>
  );
};

export default Account;
