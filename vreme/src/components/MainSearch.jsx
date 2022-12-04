import { useState } from "react";
import { Container, Row, Col, Form, Toast } from "react-bootstrap";
import City from "./City";
import NavbarVreme from "./NavbarVreme";
import FavoriteComponent from "./FavoriteComponent";
import CitiesComponent from "./CitiesComponent";
import AccountComponent from "./AccountComponent";
//import { useSelector, useDispatch } from "react-redux";

const MainSearch = ({ handleEndpoint, query }) => {
  // want to get current location of user
  let currentLat = 0;
  let currentLong = 0;
  let coordinatesArray = [];

  console.log("coordinatesArray", coordinatesArray);

  const showCurrentCoordinates = () => {
    const currentLocOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      console.log(typeof crd.latitude);
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      currentLat = crd.latitude;
      currentLong = crd.longitude;
      coordinatesArray.push(currentLat, currentLong);
      console.log({ coordinatesArray });
      return coordinatesArray;
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    return navigator.geolocation.getCurrentPosition(success, error, currentLocOptions);
  };

  window.onload = () => {
    showCurrentCoordinates();
  };

  /* ----------------------------------------------------------------------------------------
  CHALLENGE: Get name of city the user is in 
  PROBLEM: "[Violation] Only request geolocation information in response to a user gesture."
  ----------------------------------------------------------------------------------------- */
  // function getCoordintes() {
  //   var options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0,
  //   };

  //   function success(pos) {
  //     let crd = pos.coords;
  //     let lat = crd.latitude.toString();
  //     let lng = crd.longitude.toString();
  //     let coordinates = [lat, lng];
  //     console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  //     getCity(coordinates);
  //     return;
  //   }

  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }

  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // }

  // function getCity(coordinates) {
  //   let xhr = new XMLHttpRequest();
  //   let lat = coordinates[0];
  //   let lng = coordinates[1];

  //   // Paste your LocationIQ token below.
  //   xhr.open(
  //     "GET",
  //     `https://us1.locationiq.com/v1/reverse.php?key=pk.19de85d885d50b18180cab82855cc361&lat=${lat}&lon=${lng}&format=json`,
  //     true
  //   );
  //   xhr.send();
  //   xhr.onreadystatechange = processRequest;
  //   xhr.addEventListener("readystatechange", processRequest, false);

  //   function processRequest(e) {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //       var response = JSON.parse(xhr.responseText);
  //       var city = response.address.village;
  //       console.log(city);
  //       return;
  //     }
  //   }
  // }
  // getCoordintes();

  const [cities, setCities] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d0ae19ece6msh1e9e4a680f20c33p167ea2jsne5ff1736876f",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const baseEndpoint = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // const response = await fetch(baseEndpoint + query + "&limit=20");
      const response = await fetch(baseEndpoint + query, options);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        setCities(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* <NavbarVreme value={query} onChange={handleChange} /> */}
      <Container>
        <Row>
          {/* <Col xs={10} className="mx-auto my-3">
            <h1>City wheater</h1>
          </Col> */}
          <Col xs={10} md={6} className="mx-auto mt-5">
            <NavbarVreme />
            <div id="mainSearchFavorites">
              <FavoriteComponent />
              <CitiesComponent />
              <AccountComponent />
            </div>

            <Form onSubmit={handleSubmit} id="form">
              <Form.Control
                type="search"
                value={query}
                onChange={(e) => {
                  handleEndpoint(e.target.value);
                }}
                placeholder="type and press Enter"
              />
            </Form>
            <div>
              {cities.map((cityData) => (
                <City key={cityData.id} data={cityData} handleEndpoint={handleEndpoint} />
              ))}
            </div>
          </Col>

          {/* <Col xs={10} md={6} className="mx-auto mb-5">
            <div>
              {cities.map((cityData) => (
                <City key={cityData.id} data={cityData} handleEndpoint={handleEndpoint} />
              ))}
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default MainSearch;
