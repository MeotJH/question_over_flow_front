import { Navbar,
        NavbarBrand,
        NavbarToggler,
        Input,
        Col, 
        Container,
        Button,
        Row} from 'reactstrap';

const HeaderPage = () => {
    return(
        <Navbar
            color="light"
            expand
            fixed="top"
            light
        >
        <Container fluid>
            <Row>
                <Col  sm="2">
                    <NavbarBrand href="/">
                    QuestionOverFlow
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                </Col>
                <Col  sm="10">
                    <Row>
                        <Col sm="10">
                            <Input
                                type="search"
                                placeholder='검색해 보세요'
                            />
                        </Col>
                        <Col sm="2">
                            <Button
                                outline
                                color="primary"
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Navbar>
    )
}

export default HeaderPage;