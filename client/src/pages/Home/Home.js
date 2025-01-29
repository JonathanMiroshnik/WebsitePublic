import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../../components/ContentContainer/ContentContainer.css';
import './Home.css'

function Home() {
    return (
        <div className="contentContainer">
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={6}>
                    <h1>Hello there!</h1>
                    <u>Welcome to the personal website of</u>:
                    <h1>Jonathan Miroshnik</h1>
                    <br/>
                    <br/>
                    <h2>
                        Programmer
                    </h2>
                    </Col>
                    <Col md={6}>
                    <img 
                        src="logo512.png" 
                        alt="Placeholder" 
                        className="img-fluid"
                    />
                    </Col>
                </Row>
            </Container>
            
            <br/>
            <br/>

            {/* <br/>
            <div className='containerIframe'>
                <iframe className='containerIframe' width="560" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tJ89UOVsKiHcT602" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> </iframe>
            </div> */}
        </div>
    );
}


export default Home;

