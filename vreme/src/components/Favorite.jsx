import { Button, Toast, Badge, Jumbotron } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";

const Favorite = () => {
  const navigate = useNavigate();
  const cityList = useSelector((state) => state.favorites.favoriteCities);
  const dispatch = useDispatch();

  return (
    <div>
      <Jumbotron fluid id="jumbotron">
        <h1>
          Your Favorite Cities <strong></strong>
        </h1>
        {cityList.map((city, i) => (
          <Toast id="toast" key={i}>
            <Toast.Header closeButton={false}>
              <h3>
                Welcome to
                <Badge variant="dark" className=" ml-2">
                  {city.name}
                </Badge>{" "}
              </h3>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: `REMOVE_FAVORITE`,
                    payload: i,
                  });
                }}
                className="ml-2"
              >
                <AiTwotoneDelete />
              </Button>
            </Toast.Header>
          </Toast>
        ))}
      </Jumbotron>

      <Button onClick={() => navigate("/")} variant="outline-dark" className=" text-light">
        Go Back Home
        <RiHomeSmileFill id="brokenHeart" className="ml-2" />
      </Button>
    </div>
  );
};

export default Favorite;

// <Toast id="toast">
//           <Toast.Header closeButton={false}>
//             LON:
//             <Badge variant="dark" className="ml-2 mr-auto"></Badge>
//             LAT:
//             <Badge variant="dark" className="ml-2 mr-auto"></Badge>
//             <small>Wind speed: </small>
//           </Toast.Header>
//           <Toast.Body>
//             Temperature:
//             <Badge variant="info"></Badge>
//           </Toast.Body>
//           <Toast.Header closeButton={false}>
//             <Badge variant="warning" className="mr-auto">
//               ID: #
//             </Badge>
//             <small>Cod: </small>
//           </Toast.Header>
//         </Toast>
