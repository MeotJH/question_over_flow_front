import LoginPage from "body/login/LoginPage";
import { hasToken ,getToken } from "body/common/jwt";
import LoginUserPage from "body/login/LoginUserPage"
import { Navbar,
        NavbarBrand,
        NavbarToggler,
        Input,
        Col, 
        Container,
        Button,
        Row} from 'reactstrap';
import React, { useState, useEffect } from "react"

const HeaderPage = () => {

    const [flag, setFlag] = useState(
        () => hasToken() || 0
      );


    useEffect(() => {
        console.info("flag",flag);
        console.info("hasToken",hasToken());
        setTimeout(() => {console.info("setTimeOutFlag",flag); console.info("setTimeOuthasToken",hasToken());}, 5000);
    },[flag])

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
                <Col  sm="8">
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
                <Col  sm="2">
                    { flag === true ? <LoginUserPage flag={flag} setFlag={setFlag}/> : <LoginPage/> }
                </Col>
            </Row>
        </Container>
        </Navbar>
    )
}

export default HeaderPage;