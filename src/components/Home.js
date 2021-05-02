import Carousel from 'react-bootstrap/Carousel';
import img from "./images/celeb.jpg";
const mystyle={
  //textAlign: "center",
 backgroundImage: `url(${img})`,
  //position: "fixed",
  minWidth: "100%",
  minHeight: "150%",
  backgroundSize: "cover",
  backgroundPosition: "center"
 
};
const Home=()=>{
  // styling = mystyle();
  
  
    return(
      
      <div class="container" style={mystyle}>
      
      <div className="p-5 mb-4 rounded-3 text-center" >
      <h1 className="display-5 fw-bold" style={{color: "black"}} >Welcome to Find My Events!</h1>
      <div className="container-fluid py-5 "  >
      
<Carousel >
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="http://baltravelhouse.com/images/indian_festivals.jpg"
      alt="First slide"
      // width="200px"

    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://www.adotrip.com/public/images/blogs/master_images/5bb48c95c3b30.jpg"
      alt="Second slide"
      height="400px"
      width="100px"
    />

  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="http://www.hattours.com/blog/wp-content/uploads/2012/07/collage.jpg"
      alt="Third slide"
      
    />

  </Carousel.Item>
</Carousel>


       
        
</div>
</div>
</div>
      
    
    

       

 
    )
  }

export default Home;