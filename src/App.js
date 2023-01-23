import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './components/Work';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div class="name-header">
    //       <h1>Tyler Green</h1>
    //     </div>
    //     <div class="nav-header">
    //       <div class="nav-item">
    //         <a class="nav-item-link" href="experience.html">Work Experience</a>
    //       </div>
    //       <div class="nav-item">
    //         <a class="nav-item-link" href="education.html">Education</a>
    //       </div>
    //       <div class="nav-item">
    //         <a class="nav-item-link" href="projects.html">Projects</a>
    //       </div>
    //       <div class="nav-item">
    //         <a class="nav-item-link" href="contact.html">Contact</a>
    //       </div>
    //     </div>
    //   </header>
    // </div>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
