import React, { useState, useEffect } from "react"
import { Container, Row, Col} from "reactstrap";
import RippleBody from "./RippleBody";
import Divider from "divider/Divider";
import UserCard from "./reuseable/UserCard";
import { useParams } from "react-router-dom"; 
import axios from "axios";

const Board = () => {

  const {id} = useParams();
  const [post, setPost] = useState([]);
  const [views, setViews] = useState([]);

  const getPosts = async() => {
    const response = await axios.get(`http://localhost:81/api/v1/posts/${id}`);
    const serverData = await response.data;
    setPost(serverData);
  }

  const updateViews = async() => {
    const response = await axios.patch(`http://localhost:81/api/v1/posts/${id}`)
    const serverData = await response.data;
    setViews(serverData);
  }
    
  useEffect(() => {
      getPosts();
      updateViews();
  }, []);


  return (
    <Container>
      <Row>
        <Col
        sm={{
          offset: 2,
        }}
        >
          <h1 >{post.title}</h1>
        </Col>
      </Row>
      <Row className="mt-4 text-muted">
        <Col sm={{offset:2}}>
          <span> <strong>Asked</strong> { post.createdDate } </span>
          <span> <strong>Viewed</strong> { views } times </span>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Row>
            <img src="https://picsum.photos/1400/1200" alt="" />
          </Row>

          <Row>
          <div style={{whiteSpace:  'pre-wrap' }}>
            { post.content }
          </div>
          </Row>

        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
        </Col>
        <Col>
        </Col>
        <Col>
          <UserCard/>
        </Col>
      </Row>

      <Row className="mt-5">
        <Divider color={'black'}/>
      </Row>

      <Row className="mt-5">
        <RippleBody/>
      </Row>
      </Container>
  );
}

export default Board;