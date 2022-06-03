import { Card, CardBody, CardTitle, CardHeader} from "reactstrap";
import { AiOutlineUser } from "react-icons/ai";

const UserCard = () => {
    return(
        <Card>
            <CardHeader className='text-center'>
                    <AiOutlineUser/>
                    <span style={{ marginLeft: '1rem'}} >MeotJh</span>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                <AiOutlineUser className="mr-5"/>
                </CardTitle>
            </CardBody>
        </Card>
    )
}

export default UserCard;
