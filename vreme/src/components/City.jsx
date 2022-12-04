import { Row, Col, Badge, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

const City = ({ data, changeCity }) => {
  // const jobsList = useSelector((state) => state.favorites.favList);
  // console.log({ jobsList });

  // const dispatch = useDispatch();
  // console.log({ dispatch });

  return (
    // <Row className="" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
    //   <Col>

    <div onClick={() => changeCity(data)} className="mb-3">
      {/* <Link to={`/city/` + data.wikiDataId} onClick={() => handleEndpoint(data.name)} id="cityLink"> */}

      {data.name}
      {/* </Link> */}
      <div>{data.title}</div>
    </div>

    //   </Col>
    // </Row>
  );
};

export default City;
