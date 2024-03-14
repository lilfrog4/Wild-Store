import PageSample from "../page-sample/page-sample";
import "./sweatshirts.css";
import rectangle6 from "./.././../img/Rectangle 6.jpg";
import rectangle7 from "./.././../img/Rectangle 7.jpg";
import { Routes, Route, Link } from "react-router-dom";

const Sweatshirts = () => {
  return (
    <div>
      <PageSample />
      <h1 className="h1">Толстовки</h1>
      <div className="content">
        <div className="thing">
          <a href="!#">
            <img src={rectangle6} alt="" />
          </a>
          <a href="#!">
            <p className="signature">Свитшот “Daniel Wildson”</p>
          </a>
        </div>

        <div className="thing">
          <a href="!#">
            <img src={rectangle7} alt="" />
          </a>
          <a href="#!">
            <p className="signature">Худи “DW”</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sweatshirts;
