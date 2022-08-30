import { Container, Row, Col, Carousel } from 'react-bootstrap'
import menu from '../data/menu.json'

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div className="text-center my-3">
            <h1>Benvenuti!</h1>
            <h3>Niente secondi piatti qui :)</h3>
          </div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/400/300"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/400/300"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://placekitten.com/400/300"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
