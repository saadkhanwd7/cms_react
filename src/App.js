import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from "reactstrap";
import { ToastContainer,toast } from 'react-toastify';
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import { BrowserRouter as Router,Route, Routes, BrowserRouter} from "react-router-dom";
import About from './components/About';
import Contactus from './components/Contactus';


function App() {
  const btnHandle = ()=>{
    toast.error("done" , {
      position:"top-center",
    });


  };
  return (
    <div>
 <Router>
 <ToastContainer />
  <Container>
    <Header />
  
      <Row>
        <Col md={4}><Menu /></Col>
        <Col md={8}>


           <Routes><Route path="/" element={<Home />} />
            <Route path="/add-course" element={<AddCourse />}   />
            <Route path="/view-courses" element={<Allcourses />}  />
            <Route path="/about"  element={<About  />}      />
            <Route path="/contactus"  element={<Contactus  />}      />


            </Routes> 

        </Col>


      </Row>
  </Container>


 </Router>
   
   </div>
  );
}

export default App;
