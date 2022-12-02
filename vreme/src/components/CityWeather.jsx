import { Container, Row, Col } from "react-bootstrap";
import City from "./City";
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

  const baseEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${endpoint}&APPID=1ef43fab14b2f2266b636da651921500`;

  const handleQ = async () => {
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
      <Container>
        <h1>City Weather</h1>
        <Row>
          <Col>
            <h3>{city.name}</h3>
            <p>sd</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CityWheater;
