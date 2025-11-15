import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, WorkProcess, StarsCanvas } from "./components";
import Plasma from "./components/Plasma";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0' style={{ backgroundColor: '#050816', minHeight: '100vh' }}>
        {/* Plasma Background for entire page */}
        <div className="fixed inset-0 z-0" style={{ backgroundColor: '#050816' }}>
          <Plasma 
            color="#915EFF"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
        </div>
        
        {/* Page Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <WorkProcess />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
