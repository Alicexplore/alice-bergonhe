import './App.css';
import './index.css';
// import Home from './pages/Home';
// import About from './pages/About';
// import White from './pages/White';
// import Contact from './pages/Contact';
// import Sneakers from './pages/Sneakers';
// import LeftNavbar from './components/LeftNavbar';
// import Menu from './components/Menu';
import CustomCursor from './components/CustomCursor';
import ComingSoon from './pages/ComingSoon';


export default function App() {
  return (
    <div className='h-svh w-full'>
        <div className='h-svh w-full'>
            <CustomCursor />
            <ComingSoon />
        </div>
      {/* <div className="snap-y snap-mandatory overflow-y-scroll h-svh flex-grow z-0">
          <CustomCursor />
          <LeftNavbar />
          <Menu />
          <div className="snap-always snap-start">
              <Home />
          </div>
          <div className="snap-always snap-start">
              <About />
          </div>
          <div className="snap-always snap-start">
              <White />
          </div>
          <div className="snap-always snap-start">
              <Sneakers />
          </div>
          <div className="snap-always snap-start">
              <Sneakers />
          </div>
          <div className="snap-always snap-start">
              <Sneakers />
          </div>
          <div className="snap-always snap-start"> 
              <Contact />
          </div>
      </div> */}
    </div>
  );
}
