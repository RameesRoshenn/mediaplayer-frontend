import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigativeByUrl =useNavigate()
  return (
   <>
      <Row className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3 className='mb-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>loremLorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste aspernatur voluptas asperiores laudantium sequi illum rerum dolor quos, modi ratione, magnam temporibus nisi reiciendis iure iusto! Molestias, facere suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste aspernatur voluptas asperiores laudantium sequi illum rerum dolor quos, modi ratione, magnam temporibus nisi reiciendis iure iusto! Molestias, facere suscipit.</p>
          <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-5'>Get Started</button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='d-flex justify-content-evenly'  >

        <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='m-3'> 
        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Img variant="top" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        </Card.Body>
        </Card>

        </div>
      </div>

      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5 d-flex align-items-center justify-content-between w-100'>
        <div className="col-lg-5">
          <h3 className='mb-5 text-warning'>Simple fast and Powerful</h3>
          <p><span className='fs-5 fw-bolder'>Play Everything</span>:amet consectetur adipisicing elit. Nostrum, animi magni earum dolorum neque dicta ipsam, a perferendis similique adipisci ullam ab quos excepturi quasi. Voluptates repellendus cupiditate accusamus expedita.</p>
          <p><span className='fs-5 fw-bolder'>Play Everything</span>:amet consectetur adipisicing elit. Nostrum, animi magni earum dolorum neque dicta ipsam, a perferendis similique adipisci ullam ab quos excepturi quasi. Voluptates repellendus cupiditate accusamus expedita.</p>
          <p><span className='fs-5 fw-bolder'>Play Everything</span>:amet consectetur adipisicing elit. Nostrum, animi magni earum dolorum neque dicta ipsam, a perferendis similique adipisci ullam ab quos excepturi quasi. Voluptates repellendus cupiditate accusamus expedita.</p>
        </div>
        <div className='col-lg-5'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/Xx6SKzOUqhQ?si=6ymfNxGKwdKAWonk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>


    </>
  )
}

export default LandingPage
