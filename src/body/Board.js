import { Container, Row, Col} from "reactstrap";
import { Content } from "./contentMock";
import RippleBody from "./RippleBody";
import Divider from "divider/Divider";
import UserCard from "./reuseable/UserCard";

const Board = () => {
  return (
    <Container>
      <Row>
        <Col
        sm={{
          offset: 2,
        }}
        >
          <h1 >이것은 제목 입니다. 글씨가 아름다워야 합니다.</h1>
        </Col>
      </Row>
      <Row className="mt-4 text-muted">
        <Col sm={{offset:2}}>
          <span> <strong>Asked</strong> today </span>
          <span> <strong>Modified</strong> today </span>
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
            { Content }
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