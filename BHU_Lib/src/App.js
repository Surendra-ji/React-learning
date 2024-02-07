// import logo from './logo.svg';
import './App.css';
// import { Article, Notices, UsefulComponent, ELinks, Navbar, BtnSlider, DataSlider, FooterImage, ContactUs, UsefulLinks, FollowUs, ForVisitors } from "./components/index";
import { Header, Blog, ImageSlider, Features, Footer,  BookSlider} from "./containers/index";
// import HomePage from './HomePage';
function App() {

  return (
    <>
    {/* <HomePage/> */}
    <div className="App">
      <Header/>
      {/* <Blog/> */}
      <ImageSlider/>
      {/* <BookSlider/> */}
      {/* <Features/> */}
      <Footer/>
    </div>
    </>
  );
}

export default App;
