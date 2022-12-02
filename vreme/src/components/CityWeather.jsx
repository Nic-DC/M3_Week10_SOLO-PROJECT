import { Container, Jumbotron, Badge, Toast } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { WiDegrees } from "react-icons/wi";

const CityWheater = ({ endpoint }) => {
  const [city, setCity] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const [cities, setCities] = useState([]);

  //   const options = {

  //   };

  const handleQ = async () => {
    const baseEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${endpoint}&APPID=1ef43fab14b2f2266b636da651921500`;
    try {
      // const response = await fetch(baseEndpoint + query + "&limit=20");
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

    // let selectedCity = cities.filter((city) => city.wikiDataId === params.cityId);
    // setCity(selectedCity);
    // console.log({ selectedCity });
  }, []);

  return (
    <div>
      {city && (
        <Jumbotron fluid id="jumbotron">
          <h1>
            Welcome to <strong>{city.name}</strong>
          </h1>
          <Toast id="toast">
            <Toast.Header>
              LON:
              <Badge variant="dark" className="ml-2 mr-auto">
                {city.coord.lon}
              </Badge>
              LAT:
              <Badge variant="dark" className="ml-2 mr-auto">
                {city.coord.lat}
              </Badge>
              <small>Wind speed: {city.wind.speed} km/h</small>
            </Toast.Header>
            <Toast.Body>
              Temperature: {city.main.temp}
              <WiDegrees id="degrees" />F <Badge variant="info">{city.weather[0].description}</Badge>
            </Toast.Body>
            <Toast.Header>
              <Badge variant="warning" className="mr-auto">
                ID: #{city.id}
              </Badge>
              <small>Cod: {city.cod}</small>
            </Toast.Header>
          </Toast>
        </Jumbotron>
      )}
    </div>
  );
};

export default CityWheater;
