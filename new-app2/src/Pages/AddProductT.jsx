import "./../Components/addproduct.css";
import Header from "../Components/Header";
import swear from './../img/Футболка “Danger”.jpg';
function Addproduct() {
  return (
    <div>
      <Header />
      <h1 className="h1">Футболка “Danger”</h1>
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