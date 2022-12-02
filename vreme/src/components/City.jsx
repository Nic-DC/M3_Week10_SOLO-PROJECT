import { Row, Col, Badge } from "react-bootstrap";
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
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        {/* <Link to={`/${data.name}`}>{data.name}</Link> */}
        <Link to={`/city/` + data.wikiDataId} onClick={() => handleEndpoint(data.name)} id="cityLink">
          {data.name}
        </Link>
      </Col>
      <Col xs={9}>
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
