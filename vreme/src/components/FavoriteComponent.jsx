import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiBrokenHeartZone } from "react-icons/gi";

const FavoriteComponent = () => {
  return (
    <Link to="/favorite">
      <Button variant="outline-dark" className="text-light">
        Your Favorites
        <GiBrokenHeartZone id="brokenHeart" className="ml-2" />
      </Button>
    </Link>
  );
};

export default FavoriteComponent;
