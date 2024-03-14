import './../Components/login.css'
import logoImg from './../img/logo.png'
import './../Components/header.css'

const Login = () =>{
    return(
        <div>
            <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="logo">
              <img src={logoImg} alt="LOGO" />
            </a>
          </div>
          
          

         
        </div>

        
               
      </div>
      
    </header>
            <form class='login-form'>
            <div class="flex-row logo">
                <h1>LOG ON</h1>
            </div>

            <div class="flex-row">
                <input id="username" class='lf--input' placeholder='Your username' type='text'/>
                
            </div>

            <div class="flex-row">
                <input id="password" class='lf--input' placeholder='Your password' type='password'/>
            </div>
            <input class='lf--submit' type='submit' value='Sign Up'/>
            <a class='lf--forgot' href='#'>Already registered? Login</a>
    
        </form>
        </div>
    );
}
export default Login;