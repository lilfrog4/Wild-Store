import "./addproduct.css";
import PageSample from "../page-sample/page-sample";
import swear from "./../../img/photo_2024-02-11_18-32-45.jpg";
function Addproduct() {
  return (
    <div>
      <PageSample />
      <h1 className="h1">Толстовка</h1>
      <div className="product">
        <img src={swear} alt="" className="img" />
        <div className="info">
          <div className="price">300$</div>
          <div className="sizes">
            <a href="">
              <div className="size">M</div>
            </a>
            <a href="">
              <div className="size">X</div>
            </a>
            <a href="">
              <div className="size">L</div>
            </a>
            <a href="">
              <div className="size">XL</div>
            </a>
            <a href="">
              <div className="size">XS</div>
            </a>
          </div>

          <button className="addToBusket">
            <a href="">Добавить в корзину</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
