import "./../Components/addproduct.css";
import Header from "../Components/Header";
import swear from './../img/h dw.jpg';
function AddproductT() {
  return (
    <div>
      <Header />
      <h1 className="h1">Худи “DW”</h1>
      <div className="product">
        <img src={swear} alt="" className="img" />
        <div className="info">
          <div className="price">4999₽</div>
          <div class="sizes">
  <label>
    <input type="radio" name="size" value="M" class="qwe" />
    <p>M</p>
  </label>

  <label>
    <input type="radio" name="size" value="X" class="qwe" />
    <p>X</p>
  </label>

  <label>
    <input type="radio" name="size" value="L" class="qwe" />
    <p>L</p>
  </label>
  
  <label>
    <input type="radio" name="size" value="XL" class="qwe" />
    <p>XL</p>
  </label>

  <label>
    <input type="radio" name="size" value="XS" class="qwe" />
    <p>XS</p>
  </label>
</div>
          

          <button className="addToBusket">
            <a href="">Добавить в корзину</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddproductT;