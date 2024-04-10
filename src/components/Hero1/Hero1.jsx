import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';


const Hero1 = () =>{
    return (
      <Carousel interval={5000}>
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/import-vapes.appspot.com/o/productos%2Fhero1.jpg?alt=media&token=85dd53aa-8ad9-4891-9aa8-bc4969833886'
            alt="First-slide"
          />
          
        </Carousel.Item> 
        
        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1"
            src='https://firebasestorage.googleapis.com/v0/b/import-vapes.appspot.com/o/productos%2Fhero2.jpg?alt=media&token=32d36539-be49-42c9-a5ba-412832d57b3c'
            alt="Second-slide"
          />
          
        </Carousel.Item>

        <Carousel.Item className='Hero1Container'>
          <img
            className="imgHero1 imgHero3"
            src='https://firebasestorage.googleapis.com/v0/b/import-vapes.appspot.com/o/productos%2Fhero3.jpg?alt=media&token=a2546d97-c5c3-4d73-8cfc-0fb80d8b72a3'
            alt="Third-slide"
          />
          
        </Carousel.Item> 
      </Carousel>
    );
}
export default Hero1