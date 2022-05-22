
import './signin.css';
import {Link} from "react-router-dom";
import GoogleButton from "react-google-button";

function Signin(){
          return(
            <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <form class="login">
                       <center>
                       <h1>Login</h1>
                        </center> 
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="text" class="login__input" placeholder="User name / Email"></input>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" class="login__input" placeholder="Password"></input>
                        </div>
                        <button class="button login__submit">
                            <span class="button__text">Log In Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                    <div class="social-login">
                        {/* <p>Don't have an account</p> */}
                        <Link to="/signup">Sign Up</Link>
                        
                    </div>
                    <div>
          
         </div> 
<GoogleButton
             className="g-btn"
             type="black"
            
           />
                </div>
             
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>		
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
          )    
}
export default Signin;