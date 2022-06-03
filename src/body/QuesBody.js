import React, { useState, useEffect } from "react"
import { Container, Row } from 'reactstrap';
import QuesCardItem from 'body/QuesCardItem';
import axios from "axios";

const QuesBody = () => {

    const [posts, setPosts] = useState([]);

    const ask = async() =>{
        const response = await axios.get(`http://localhost:81/api/v1/posts`);
        const result = await response.data;

        let res = [];
        for (let i = 0; i < result.length; i += 4) {

            if(i === result.length-1){
                res.push([result[i]]);
                break;
            } 
            res.push([result[i], result[i + 1], result[i + 2], result[i + 3]]);
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