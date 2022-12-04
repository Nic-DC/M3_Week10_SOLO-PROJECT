import { Row, Col, Badge, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

const City = ({ data, handleEndpoint }) => {
  // const jobsList = useSelector((state) => state.favorites.favList);
  // console.log({ jobsList });

  // const dispatch = useDispatch();
  // console.log({ dispatch });

  return (
    <Row className="" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col>
        <div>
          <Link to={`/city/` + data.wikiDataId} onClick={() => handleEndpoint(data.name)} id="cityLink">
            {data.name}
          </Link>
        </div>

        {/* <Link to={`/${data.name}`}>{data.name}</Link> */}
      </Col>
      <Col xs={10} md={6}>
        {/* <a href={data.url} target="_blank" rel="noreferrer"> */}

        <div>
          {data.title} {/* <Link to={`/favorites`}> */}
          {/* <Badge
            variant="warning"
            onClick={() => {
              dispatch({
                type: `ADD_TO_FAVORITES`,
                payload: data,
              });
            }}
          >
            <AiTwotoneHeart id="favorite" />
          </Badge> */}
          {/* </Link> */}
          {/* {deleteJob && (
            <RiDeleteBin2Fill
              id="deleteJob"
              className="ml-2"
              onClick={() => {
                dispatch({
                  type: `DELETE_FAVORITE`,
                  payload: data._id,
                });
              }}
            />
          )} */}
        </div>
      </Col>
    </Row>
  );
};

export default City;
