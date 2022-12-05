import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GiBrokenHeartZone } from "react-icons/gi";
import { useSelector } from "react-redux";

const FavoriteComponent = () => {
  const navigate = useNavigate();
  const totalFavorites = useSelector((state) => state.favorites.favoriteCities.length);
  return (
    <Button variant="outline-dark" className="text-light" onClick={() => navigate("/favorite")}>
      <span>Your Favorites</span>
      <GiBrokenHeartZone id="brokenHeart" className="ml-2" />
      <span>{totalFavorites}</span>
    </Button>
  );
};

export default FavoriteComponent;
