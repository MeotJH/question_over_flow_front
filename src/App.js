import HeaderPage from "./header/HeaderPage";
import FooterPage from "./footer/FooterPage";
import RouterPath from "./route-conf/RouterPath";
import { Container, Row} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="mt-5">
          <HeaderPage />
        </Row>
        <Row className="mt-5">
          <RouterPath/>
        </Row>
      </Container>
      <FooterPage />
    </div>
  );
}

export default App;
