import { Container, Row, Col } from "reactstrap";
import { Content } from "./contentMock";
import UserCard from "./reuseable/UserCard";

const RippleBody = () => {
    return (
      <Container>
          <Row>
              <Col className="text-muted">
                <span> <strong>Answer</strong> n </span>
              </Col>
          </Row>
          <Row className="mt-5">
                <Col style={{whiteSpace:  'pre-wrap' }}>
                    { Content }
                </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
            <UserCard/>
            </Col>
          </Row>
        </Container>
    );
  }

export default RippleBody;