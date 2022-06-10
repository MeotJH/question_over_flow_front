import LoginPage from "body/login/LoginPage";
import LoginUserPageContainer from "body/container/LoginUserPageContainer";
import { Navbar,
        NavbarBrand,
        NavbarToggler,
        Input,
        Col, 
        Container,
        Button,
        Row} from 'reactstrap';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const HeaderPage = () => {

    const token = useSelector(state => state.quesBody.flag);

    useEffect(() => {
    },[token])

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
                   { token === true ? <LoginUserPageContainer token={token} />  : <LoginPage/> }
                </Col>
            </Row>
        </Container>
        </Navbar>
    )
}

export default HeaderPage;