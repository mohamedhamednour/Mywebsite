import './App.css';
import Signup from './components/signup'
import Signin from './components/sign_in'
import Navbar from './components/navbar'
import { Home } from '../src/components/home'
import {PrivateRoute} from "../src/components/auth/provideroute";
import Footer from "./components/Todo/footer";


import { AuthProvider } from '../src/components/auth/usecontext'
import { Route, Routes } from "react-router-dom";
import Phone from './components/auth/authphone'
import ForgotPassword from './components/Todo/forget-password'
import { useAuth  } from "./components/auth/usecontext"
import {Portflio} from '../src/components/Todo/portflio'



function App() {
  // const { currentUser } = useAuth()
  // const {  currentUser} = useAuth()


  

  return (
    <div className="App">

      <AuthProvider>
    <Navbar />     
< Footer/> 
 <pre>










        </pre>

        <Routes>
          
          <Route path="sign_in" element={<Signin />} />
          <Route path="phone" element={<Phone />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="forgertpass" element={<ForgotPassword />} />

       <Route path='Portflio'   element={<Portflio/>}/>
          <Route exact path="/" element={<Home />} >
          



          </Route>



            


        </Routes>

      </AuthProvider>


    </div>
  );
}

export default App;
