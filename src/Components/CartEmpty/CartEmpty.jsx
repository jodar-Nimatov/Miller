import React from "react";
import { Link } from "react-router-dom";
import Close from "../../pages/Cart/Check-photo/CloseCartEmpty.svg";
import CartLogo from "../../assets/Header/basket.svg";

const CartEmpty = ({ see, setSee }) => {
  const exitCart = (e) => {
    if (e.target.classList.contains("CartEmpty")) {
      setSee(false);
    }
  };

  return (
    <div
      onClick={exitCart}
      style={{ display: see ? "flex" : "none" }}
      className="CartEmpty"
    >
      <div className="CartEmpty-inner">
        <img className="CartEmpty-logo" src={CartLogo} alt="" />
        <h2 className="CartEmpty-title">Корзина пустая</h2>
        <button
          type="button"
          onClick={() => setSee(false)}
          className="CartEmpty-btn"
        >
          <Link to="/catalog/coffee">Посмотреть каталог</Link>
        </button>
        <span onClick={() => setSee(false)} className="CartEmpty-close">
          <img src={Close} alt="" />
        </span>
      </div>
    </div>
  );
};

export default CartEmpty;
