import { Container, Jumbotron, Badge, Toast } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

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
          <Container>
            <h1>
              Welcome to <strong>{city.name}</strong>
            </h1>
            <Toast>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
            <Badge variant="warning">{city.id}</Badge>
            <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      )}
    </div>
  );
};

export default CityWheater;
