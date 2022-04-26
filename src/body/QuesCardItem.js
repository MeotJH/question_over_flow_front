import {Row,
    Col,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardBody, 
    Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const QuesCardItem = () =>{
    return(
        <Row sm="4" className='mt-3'>
                <Col>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            <Link to="/board" className="text-decoration-none text-white">Button</Link>
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    )
}

export default QuesCardItem;