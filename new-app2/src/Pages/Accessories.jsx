import Header from "../Components/Header";
import "./../Components/accessories.css";

import rectangle9 from "./../img/Rectangle 9.jpg";

const Accessories = () => {
  return (
    <div>
      <Header />
      <h1 className="h1">Аксессуары</h1>
      <div className="content">
        <div className="thing">
          <a href="productA">
            <img src={rectangle9} alt="" />
          </a>
          <a href="productA">
            <p className="signature">Шоппер “Logo”</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
