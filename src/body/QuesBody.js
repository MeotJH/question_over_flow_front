import React, { useState, useEffect } from "react"
import { Container, Row } from 'reactstrap';
import QuesCardItem from 'body/QuesCardItem';
import axios from "axios";

const QuesBody = () => {

    const [posts, setPosts] = useState([]);

    const ask = async() =>{
        const response = await axios.get(`http://localhost:81/api/v1/posts`);
        const temp = await response.data;

        let res = [];
        for (let i = 0; i < temp.length; i += 4) {
            const filterObj = [temp[i], temp[i + 1], temp[i + 2], temp[i + 3]]
            const rslt = filterObj.filter((element, i) => element !== undefined);
            res.push(rslt);
        }

        setPosts(res);
    }
    
    useEffect(() => {
        ask();
        
    }, []);

    
    return (
        <Container fluid>
            {posts.map((itemArr, i) => 
            <Row sm="4" className='mt-3'  key={ i }>
            <QuesCardItem posts={itemArr}/>
            </Row>
            )}         
        </Container>
    )

}

export default QuesBody;