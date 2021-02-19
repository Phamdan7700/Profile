import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
           I AM <strong>DAN PHAM</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="Freelancer !!!" //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><a href="https://fb.com/phammdann" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</a></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><a style={{ textDecoration: 'none', color: 'white' }} href="https://fb.com/phammdann" className="home-left-aboutme">Contact Me</a></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
