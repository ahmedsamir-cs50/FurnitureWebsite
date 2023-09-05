import Carousel from 'react-bootstrap/Carousel';
import {ExampleCarouselImage1} from '../ExampleCarouselImage/CarouselImage'
import {ExampleCarouselImage2} from '../ExampleCarouselImage/CarouselImage'
import {ExampleCarouselImage3} from '../ExampleCarouselImage/CarouselImage'



function Slider() {
  return (
    <Carousel fade interval={1000}  infinite >
      <Carousel.Item>
        <ExampleCarouselImage1  text="First slide" />
        <Carousel.Caption className='m-auto'>
          <h1  style={{fontWeight:"bold" }}>Back to School</h1>
          <p>Take 25% Off Our best in class styles with code School </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage2  text="Second slide" />
        <Carousel.Caption>
          <h1 style={{fontWeight:"bold"}}>Low-Maintenance Rugs</h1>
          <p>Step into Comfort with new performence</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage3 text="Third slide" />
        <Carousel.Caption>
          <h1 style={{fontWeight:"bold"}}>Pool & Stick</h1>
          <p>
            Create a standout Statement with bold colors and shape.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;


