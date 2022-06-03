import {
    Col,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardBody} from 'reactstrap';
import { useNavigate  } from 'react-router-dom';

const QuesCardItem = ({posts}) =>{

    const navigate = useNavigate();

    const goPost = (id) => {
        navigate(`/board/${id}`);
    }

    return(
        <>
            {posts.map(item => 
                <Col key={ item.id } onClick={() => goPost(item.id)}>
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
                            {item.cardContent}
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                )}
        </>
    )
}

export default QuesCardItem;