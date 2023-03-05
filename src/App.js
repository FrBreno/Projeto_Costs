import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import NewProject from './components/pages/NewProject/NewProject';

import Container from './components/layout/Container/Container';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="min_height">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
