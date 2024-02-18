import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./modules/Home/Home";
import Navbar from "./shared/components/NavBar";
import Ticket from "./modules/Ticket/Ticket";
import ContactPage from "./modules/Contact/ContactPage";
import Footer from "./shared/components/Footer";
import Navbar2 from "./shared/components/Navbar2";
import AdminPg from "./modules/Admin/AdminPg";
import Register from "./modules/Auth/Register";
import Login from "./modules/Auth/Login";


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Navbar2/>  
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/ticket' element={<Ticket />} />
          <Route exact path='/contactUs' element={<ContactPage />} />
          <Route exact path='/admin' element={<AdminPg/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}
export default App;
