

import './App.css';
import MainPage from'./Component/MainPage';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import ErrorPage from './Component/ErrorPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
     
      
     

    </div>
  );
}

export default App;


