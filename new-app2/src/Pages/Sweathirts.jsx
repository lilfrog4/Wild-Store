import "./../Components/sweatshirts.css";
import rectangle6 from "./../img/Rectangle 6.jpg";
import rectangle7 from "./../img/Rectangle 7.jpg";
import Header from "../Components/Header";


const Sweatshirts = () => {
  return (
    <div>
      <Header />
      <h1 className="h1">Толстовки</h1>
      <div className="content">
        <div className="thing">
          <a href="productS1">
            <img src={rectangle6} alt="" />
          </a>
          <a href="productS1">
            <p className="signature">Свитшот “Daniel Wildson”</p>
          </a>
        </div>

        <div className="thing">
          <a href="productS2">
            <img src={rectangle7} alt="" />
          </a>
          <a href="productS2">
            <p className="signature">Худи “DW”</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sweatshirts;