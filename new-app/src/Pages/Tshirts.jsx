import rectangle8 from './../img/IMG_1218.jpg'
import './../Components/tshirts.css'
import Header from '../Components/Header';
const Tshirts = () => {
    return (
      <div>
        <Header/>
       
        <h1 className="h1">Футболки</h1>
        <div className="content">
          <div className="thing">
            <a href="!#">
              <img src={rectangle8} alt="" />
            </a>
            <a href="#!">
              <p className="signature">Футболка “Danger”</p>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tshirts;