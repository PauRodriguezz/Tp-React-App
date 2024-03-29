import { Carousel } from "react-bootstrap"

const carruselHome = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="/assets/images/slide1.jpg" 
        alt="imagen carrusel"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="/assets/images/slide2.jpg" 
        alt="imagen carrusel"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: 'cover'}}
        src="/assets/images/slide3.jpg" 
        alt="imagen carrusel"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default carruselHome