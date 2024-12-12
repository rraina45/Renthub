import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Filter from './Components/Filter';
import FormRooms from './Components/FormRooms.js';
import Navbar from './Components/Navbar.js';
import PropertyList from './Components/PropertyList.js';
import PropertyDetails from './Components/PropertyDetails.js';
import CreateAccount from './Components/CreateAccount.js';
import LoginPage from './Components/LoginPage.js';
import useUser from './Hooks/useUser.js';
import Footer from './Components/Footer.js';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Services from './pages/services.jsx';
import FAQs from './pages/FAQ.jsx';
import NotFound from './pages/NotFound.jsx';
function App() {
  const {user, isLoading} = useUser()
  return (
    <Router>
      <div className=''>
        <Navbar />
         <div className="w-[80%] mx-auto">
          <Routes>
            <Route path="/" element={<PropertyList/>} />
            <Route path="/form-room" element={user ? <FormRooms/> : <LoginPage/> } />
            <Route path="/property/:id" element={<PropertyDetails/>} />
            <Route path="/loginpage" element={<LoginPage/>} />
            <Route path="/CreateAccount" element={<CreateAccount/>} />
            <Route path="/about" element={<About/>}/>
               
               <Route path="/services" element={<Services/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/FAQs" element={<FAQs/>}/>

               <Route Path="*" element={<NotFound/>}/>
          </Routes>
        </div> 
        
       
               
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
