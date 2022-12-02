import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import City from "./City";
// import NavbarVreme from "./NavbarVreme";

//import { useSelector, useDispatch } from "react-redux";

const MainSearch = ({ handleEndpoint, query }) => {
  // const jobsList = useSelector((state) => state.favorites.favList);
  // console.log({ jobsList });

  // const dispatch = useDispatch();
  // console.log({ dispatch });

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
          <Col xs={10} className="mx-auto my-3">
            <h1>City wheater</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={(e) => {
                  handleEndpoint(e.target.value);
                }}
                placeholder="type and press Enter"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {cities.map((cityData) => (
              <City key={cityData.id} data={cityData} handleEndpoint={handleEndpoint} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainSearch;

// return (
//   <Container>
//     <Row>
//       <Col xs={10} className="mx-auto my-3">
//         <h1>City wheater</h1>
//       </Col>
//       <Col xs={10} className="mx-auto">
//         <Form onSubmit={handleSubmit}>
//           <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
//         </Form>
//       </Col>
//       <Col xs={10} className="mx-auto mb-5">
//         {cities.map((jobData) => (
//           <Job key={jobData._id} data={jobData} />
//         ))}
//       </Col>
//     </Row>
//   </Container>
// );
// };
