import rectangle8 from './../img/Футболка “Danger” модель.jpg';
import './../Components/tshirts.css'
import Header from '../Components/Header';
const Tshirts = () => {
    return (
      <div>
        <Header/>
       
        <h1 className="h1">Футболки</h1>
        <div className="content">
          <div className="thing">
            <a href="productT">
              <img src={rectangle8} alt="" />
            </a>
            <a href="productT">
              <p className="signature">Футболка “Danger”</p>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tshirts;