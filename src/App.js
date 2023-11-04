
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Courses from './components/courses/Courses';
import Footer from './components/Footer/Footer';
import Login from './components/LoginSignUp/Login';
import Enroll from './components/Enroll/Enroll';
import DashBoard2 from './components/AdminDashboard/DashBoard2';
import Teacher from './components/AdminDashboard/Teachers/Teacher';
import Students from './components/AdminDashboard/Students/Students';
import CoursesCrud from './components/AdminDashboard/CoursesCrud/CoursesCrud';
// import Dashboard from './components/AdminDashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Courses/>
      <Enroll/>
      <Login/>      
      <DashBoard2/>
      <Teacher/>
      <Students/>
      <CoursesCrud/>
      <Footer/>
      
    </div>
  );
}

export default App;
