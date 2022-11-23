import './design.css'
import React from "react";
import Slider from "./Slider";
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import download from'./images/download.jpg';


function Home(){
    return(

        <Container>
            <Slider/>

            <br></br>
        


            <Row>
                <Col>

                    <h1  className='bg-secondary'>Our Company</h1>
                <div className="underline"></div>
                </Col>
               
            </Row >

            <Row>
            <Col>
                    <p>Note that the development build is not optimized.
                            To create a production build,Note that the development build is not optimized.
                            To create a production build, use npm run build.  use npm run build. Note that the development build is not optimized.
                            To create a production build, use npm run build. </p>
                            <br></br>
                        <Button>Read More</Button>
                </Col>
            </Row>
            <br></br>
            <br></br>

            <Row >
            <Col>
                            <h1  className='bg-secondary'>Our Services</h1>
                         <div className="underline"></div>
                      
              </Col> 
            </Row>

            <Row>
                
                <Col>

                <Card>
      <Card.Img variant="top" src={download}/>
      <Card.Body>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Read More</Card.Link>
        <Card.Link href="#">Order</Card.Link>
      </Card.Body>
    </Card>

                        </Col>
                        <Col>

                        <Card>
      <Card.Img variant="top" src={download}/>
      <Card.Body>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Read More</Card.Link>
        <Card.Link href="#">Order</Card.Link>
      </Card.Body>
    </Card>

                        </Col>
               <Col>
               

                
               <Card>
      <Card.Img variant="top" src={download}/>
      <Card.Body>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Read More</Card.Link>
        <Card.Link href="#">Order</Card.Link>
      </Card.Body>
    </Card>
                 

               </Col>

               <Col>

               <Card>
      <Card.Img variant="top" src={download}/>
      <Card.Body>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Read More</Card.Link>
        <Card.Link href="#">Order</Card.Link>
      </Card.Body>
    </Card>

                </Col>

                       
                                
            </Row>
<br></br>
            <Row>
            <Col>
                            <h1  className='bg-secondary'>Our Vision Mision</h1>
                         <div className="underline"></div>
                      
              </Col> 
            </Row>

            <Row>
                
                <Col>

                                    <h1>Our vision</h1>
                                 <div>
                                         <p>Note that the development build is not optimized.
                                                         To create a production build,Note  </p>
                                 </div>

                        </Col>
               <Col>

                
                   <h1>Our Mission</h1>
                   <p>Note that the development build is not optimized.
                    To create a production build,Note  </p>
                 

               </Col>

        

                       
                                
            </Row>


            <Row>
                <Col>

                    <h1  className='bg-secondary'>About Us</h1>
                <div className="underline"></div>
                </Col>
               
            </Row>

            <Row>
            <Col>
                    <p>Note that the development build is not optimized.
                            To create a production build,Note that the development build is not optimized.
                            To create a production build, use npm run build.  use npm run build. Note that the development build is not optimized.
                            To create a production build, use npm run build. </p>
                            <br></br>
                      
                </Col>
            </Row>

            <Row  className='bg-secondary'>
            <Col>
                    <div>
                    <p>The site  made of with react and react-bootstrap technology</p>
                    </div>
                    
            </Col>
            </Row>


            
    </Container>  
    
    );
}
export default Home;