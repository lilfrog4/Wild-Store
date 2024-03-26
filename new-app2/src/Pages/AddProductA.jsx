import "./../Components/addproduct.css";
import Header from "../Components/Header";
import swear from './../img/сумка.jpg';
import addToCart from "./../addToCart";
function AddproductT() {
  return (
    <div>
      <Header />
      <h1 className="h1">Шоппер "LOGO"</h1>
      <div className="product">
        <img src={swear} alt="" className="img" />
        <div className="info">
          <div className="price">2499₽</div>
          

          <button className="addToBusket">
            <a href="">Добавить в корзину</a>
          </button>
        </div>
      </div>
    </div>
  );
  addToCart();

  
}

export default AddproductT;