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

  const ask = async() =>{
    const response = await axios.get(`http://localhost:81/api/v1/posts/${id}`);
    const temp = await response.data;
    setPost(temp);
  }

  const updateCnt = async() => {
    const response = await axios.patch(`http://localhost:81/api/v1/posts/${id}`)
    const temp = await response.data;
    console.info("temp",temp)
  }
    
    useEffect(() => {
        ask();
        updateCnt();
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
          <span> <strong>Viewed</strong> 3 times </span>
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