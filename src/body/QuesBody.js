import React from "react"
import { Container } from 'reactstrap';
import QuesCardItem from 'body/QuesCardItem';

const QuesBody = () => {

    return (
        <Container fluid>
            {[...Array(5)].map((x, i) =>
                <QuesCardItem key={i} />
            )}         
        </Container>
    )

}

export default QuesBody;