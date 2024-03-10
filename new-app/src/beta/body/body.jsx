import "./body.css";
import rectangle1 from "./.././../img/Rectangle 1.png";
import rectangle2 from "./.././../img/Rectangle 2.png";
import rectangle3 from "./.././../img/Rectangle 3.png";
import rectangle4 from "./.././../img/Rectangle 4.png";
import rectangle5 from "./.././../img/Rectangle 5.png";

const Body = () => {
  return (
    <section className="body">
      <div className="container">
        <div className="body__content">
          <div className="body__rectangles">
            <ul>
              <li>
                <img src={rectangle5} alt="rectanle" />
              </li>
              <li>
                <img src={rectangle4} alt="rectanle" />
              </li>
              <li>
                <img src={rectangle1} alt="rectanle" />
              </li>
              <li>
                <img src={rectangle2} alt="rectanle" />
              </li>
              <li>
                <img src={rectangle3} alt="rectanle" />
              </li>
            </ul>
          </div>

          <div className="quote">
            <p>
              “Love them but be wild with the others, in any case stay sons for
              your mothers.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
