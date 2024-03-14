import "./addproduct.css";
import PageSample from "../page-sample/page-sample";
import swear from "./../../img/сумка.jpg";
function Addproduct() {
  return (
    <div>
      <PageSample />
      <h1 className="h1">Аксессуары</h1>
      <div className="product">
        <img src={swear} alt="" className="img" />
        <div className="info">
          <div className="price">300$</div>

          <button className="addToBusket">
            <a href="">Добавить в корзину</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
