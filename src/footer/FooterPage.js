import { Navbar,
        Container,
        Col,
        Row} from 'reactstrap';

const HeaderPage = () => {
    return(
        <Navbar
            color="light"
            expand
            light
            className="mt-5"
        >
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col className='text-center'>
                -Fin-
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        </Navbar>
    )
}

export default HeaderPage;