import PageSample from "../page-sample/page-sample";
import "./tshirts.css";
import rectangle6 from "./.././../img/Rectangle 6.jpg";
import rectangle7 from "./.././../img/Rectangle 7.jpg";
import rectangle8 from "./.././../img/IMG_1218.jpg";

const Tshirts = () => {
  return (
    <div>
      <PageSample />
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
