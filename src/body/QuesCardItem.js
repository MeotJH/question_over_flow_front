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

const QuesCardItem = ({posts}) =>{

    return(
        <>
            {posts.map(item => 
                <Col key={ item.id }>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/256/186"
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {item.title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            {item.content}
                        </CardText>
                        <Button>
                            <Link to="/board" className="text-decoration-none text-white">Button</Link>
                        </Button>
                        </CardBody>
                    </Card>
                </Col>
                )}
        </>
    )
}

export default QuesCardItem;