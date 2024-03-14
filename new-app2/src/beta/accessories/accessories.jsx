import PageSample from "../page-sample/page-sample";
import "./accessories";
import rectangle6 from "./.././../img/Rectangle 6.jpg";
import rectangle7 from "./.././../img/Rectangle 7.jpg";
import rectangle8 from "./.././../img/Rectangle 8.jpg";
import rectangle9 from "./.././../img/Rectangle 9.jpg";

const Accessories = () => {
  return (
    <div>
      <PageSample />
      <h1 className="h1">Аксессуары</h1>
      <div className="content">
        <div className="thing">
          <a href="!#">
            <img src={rectangle9} alt="" />
          </a>
          <a href="#!">
            <p className="signature">Шоппер “Logo”</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
