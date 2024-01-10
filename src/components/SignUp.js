import { Link} from "react-router-dom";
import './SignUp.css';

const SignUp= ()=>{

return (  
  <div className="wrappercover">
    <div className="wrapper">

        <div className="form-wrapper sign-up">
          <form  >
              <h2>SignUp</h2>
              <div className="input-point">
                <input type="text" autoComplete="" required/>
                <label htmlFor="name">Enter Your Name</label>
              </div>
              <div className="input-point">
              <input type="email" autoComplete="" required/>
              <label htmlFor="name">Enter Your Email</label>
              </div>
              <div className="input-point">
                <input type="password" autoComplete="" required/>
                <label htmlFor="name">Enter Your Password</label>
              </div>
              <div className="remember">
                <label htmlFor="name"><input type="checkbox"/>I agree to the terms & conditions</label>
              </div>
                <button className="submit">Sign Up</button>
              <div className="signUp-link">  
              <p>Already have an account?
              <Link to='/logIn'> logIn</Link>
              
              </p>
              </div> 
          </form>
         </div> 
    </div> 
    </div> 
      
  )
    

}

export default SignUp;

