import { Col, Row, Button, Toast, Badge, Jumbotron, Image } from "react-bootstrap";
import { RiCelsiusFill } from "react-icons/ri";
import { GiBrokenHeartZone } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Details = ({ selectedCity }) => {
  const [city, setCity] = useState(null);
  console.log("selectedCity name", selectedCity.name);
  const endpoint = selectedCity.name;

  const dispatch = useDispatch();

  const handleQ = async () => {
    const baseEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${endpoint}&APPID=1ef43fab14b2f2266b636da651921500`;
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();
        console.log("this is data:", data);
        console.log(data.name);
        setCity(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleQ();
  }, []);

  return (
    selectedCity && (
      <div className="mt-3 mb-4 mb-lg-0">
        {city ? (
          <>
            <Row>
              <Col sm={12} className="details-header">
                <span>
                  <small>Welcome to</small> <strong>{city.name}</strong>
                </span>
                <Button
                  color="dark"
                  onClick={() => {
                    dispatch({ type: `ADD_TO_FAVORITE`, payload: selectedCity });
                  }}
                  className="text-light ml-2"
                  variant="outline-dark"
                >
                  <GiBrokenHeartZone id="brokenHeart" />
                </Button>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col sm={4}>
                <div className="mt-3">
                  {/* <img className="book-cover" src={bookSelected.imageUrl} alt="book selected" /> */}
                </div>
              </Col>
              <Col sm={8}>
                <div className="details-weather mb-2">
                  <Badge variant="info" className="mr-2 badgeStyling">
                    {city.weather[0].description}
                  </Badge>
                  <span className="font-weight-bold">Temp:</span>&nbsp;
                  <Badge variant="info" className="ml-1 badgeStyling">
                    {Math.floor(city.main.temp - 273.15)}
                    <RiCelsiusFill className=" mb-1" />
                  </Badge>
                </div>
                <div className="details-weather mb-2">
                  <span className="font-weight-bold">Lon:</span>&nbsp;
                  <Badge variant="dark" className="ml-1 ">
                    {city.coord.lon}
                  </Badge>
                  <span className="font-weight-bold ml-2">Lat:</span>&nbsp;
                  <Badge variant="dark" className="ml-1 ">
                    {city.coord.lat}
                  </Badge>
                </div>
                <div className="details-weather mb-2">
                  <span className="font-weight-bold">Wind speed:</span>&nbsp;
                  <Badge variant="warning" className="ml-1 ">
                    {city.wind.speed} km/h
                  </Badge>
                </div>
                <div className="details-weather mb-2">
                  <span className="font-weight-bold">Humidity:</span>&nbsp;
                  <Badge variant="light" className="ml-1 ">
                    {city.main.humidity}%
                  </Badge>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3>Start by clicking on a city!</h3>
            </Col>
          </Row>
        )}
      </div>
    )
  );
};

export default Details;

// {selectedCity && (
//     <Jumbotron fluid id="jumbotron">
//       <h1>
//         Welcome to <strong>{selectedCity.name}</strong>
//       </h1>
//       <Toast id="toast">
//         <Toast.Header>
//           LON:
//           <Badge variant="dark" className="ml-2 mr-auto">
//             {selectedCity.coord.lon}
//           </Badge>
//           LAT:
//           <Badge variant="dark" className="ml-2 mr-auto">
//             {selectedCity.coord.lat}
//           </Badge>
//           <small>Wind speed: {selectedCity.wind.speed} km/h</small>
//         </Toast.Header>
//         <Toast.Body>
//           Temperature: {selectedCity.main.temp}
//           <WiDegrees id="degrees" />F <Badge variant="info">{selectedCity.weather[0].description}</Badge>
//         </Toast.Body>
//         <Toast.Header>
//           <Badge variant="warning" className="mr-auto">
//             ID: #{selectedCity.id}
//           </Badge>
//           <small>Cod: {selectedCity.cod}</small>
//         </Toast.Header>
//       </Toast>
//     </Jumbotron>
//   )}
