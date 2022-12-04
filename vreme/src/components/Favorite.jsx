import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";

const Favorite = () => {
  return (
    <div>
      <h1>Your Favorites</h1>
      <Link to="/">
        <Button>
          Go Back Home
          <RiHomeSmileFill id="brokenHeart" className="ml-2" />
        </Button>
      </Link>
    </div>
  );
};

export default Favorite;
