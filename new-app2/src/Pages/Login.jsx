import './../Components/login.css'
import logoImg from './../img/logo.png'
import './../Components/header.css'
import sht from "./../log" 
const Login = () => {
  
  return (
    
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
      <form className="login-form">
        <div className="flex-row logo">
          <h1>LOG ON</h1>
        </div>
        <div className="flex-row">
          <input
            id="username"
            className="lf--input"
            placeholder="Your username"
            type="text"
            
          />
        </div>
        <div className="flex-row">
          <input
            id="password"
            className="lf--input"
            placeholder="Your password"
            type="password"
          />
        </div>
       
        <button id = "loginButton" className="lf--submit" type="submit">
          Log On
        </button>
        
        <a className="lf--forgot" href="#">
          Already registered? Login
        </a>
        
      </form>
        
    </div>
    
  );
  
  
  



};



export default Login;


