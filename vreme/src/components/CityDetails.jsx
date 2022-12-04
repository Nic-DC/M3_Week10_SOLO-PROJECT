import { Col, Row, Button, Toast, Badge, Jumbotron } from "react-bootstrap";
import { WiDegrees } from "react-icons/wi";
import { GiBrokenHeartZone } from "react-icons/gi";
import { useState, useEffect } from "react";
import Details from "./Details";

const CityDetail = ({ selectedCity }) => {
  const [endpoint, setEndpoint] = useState(null);
  console.log({ selectedCity });

  //   const handleEndpoint = (value) => setEndpoint(value.name);
  //   handleEndpoint(selectedCity);

  //   setEndpoint(selectedCity.name);

  return (
    selectedCity && <div className="mt-3 mb-4 mb-lg-0">{selectedCity && <Details selectedCity={selectedCity} />}</div>
  );
};

export default CityDetail;

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
