import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Dashbord from './Components/Dashbord/Dashbord';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/reviews' element={<Reviews/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/dashbord' element={<Dashbord/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
