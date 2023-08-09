import About from "./About";
import MainCarousel from "./MainCarousel";
import Quote from "./Quote";
import Services from "./Services";
import Reviews from "./Reviews";


const Home = () => {
  const apiKey = 'AIzaSyBg8kkM413J-HbQpUUm0PM0FQ1hHk1jJNw';
  return (
    <>
      <MainCarousel />
      <Reviews apiKey={apiKey} />
      <Services />
      <Quote />
      <About />
    </>
  );
}

export default Home;

//https://maps.googleapis.com/maps/api/place/textsearch/json?key=${AIzaSyBg8kkM413J-HbQpUUm0PM0FQ1hHk1jJNw}&query=DownTo%20The%20Details