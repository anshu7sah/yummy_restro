import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import {
  getCart,
  getCartTotal,
  getTotalItemsInCart,
  removeDishFromCart,
  updateDishQuantity,
} from "./CartHandler";
import { Link } from "react-router-dom";
import MenuCard from "../UI/MenuCart/MenuCard";
import { Notification } from "../UI/Notification/Notification";

const Cart = () => {
  const [dishes, setdishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const init = async () => {
    try {
      const items = await getCart();
      setdishes(items);
    } catch (error) {
      console.log("Error at Cart component at init function", error);
    }
  };
  const updateCart = async (dish, action) => {
    await updateDishQuantity(dish);
    setdishes(getCart());
    setNotificationText(
      action === "increment" ? "ITEM_QTY_INCREASED" : "ITEM_QTY_DECREASED"
    );
    setShow(true);
  };
  const removeDish = async (dish) => {
    await removeDishFromCart(dish._id, () => setdishes(getCart()));
    setNotificationText("REMOVE_FROM_CART");
    setShow(true);
  };
  useEffect(() => {
    init();
  }, []);

  const showCart = () => (
    <>
      {dishes.map((dish) => (
        <div className="col-lg-4 col-md-5" key={dish._id}>
          <MenuCard
            dish={dish}
            updateCart={updateCart}
            removeDish={removeDish}
          />
        </div>
      ))}
    </>
  );
  const closeHandler = () => {
    setShow(false);
  };
  const displayNotification = () => {
    return (
      show && (
        <Notification
          show={show}
          text={notificationText}
          close={closeHandler}
        />
      )
    );
  };
  const renderCart = () => {
    return (
      <Layout title={"Cart Summary"}>
        {displayNotification()}
        <div className="container">
          <div className="row justify-content-center mt-5 mb-3 ">
            <div className="col-12 col-lg-4">
              <h4>Your Cart containes {getTotalItemsInCart()} dish(es)</h4>
            </div>
            <div className="col-12 col-lg-auto">
              <button className="btn btn-primary">
                Continue Shopping<strong> &#x27F9;</strong>
              </button>
            </div>
          </div>
          <div className="row justify-Content-center mt-5">
            <div className="col-lg-6 col-7">
              <div className="row justify-content-start">{showCart()}</div>
            </div>
            <div className="col-lg-5 col-md-6">
              <h5 style={{ textDecoration: "underline" }}>
                Total:
                <i className="fa fa-inr" />{" "}
                <span style={{ padding: "0 5px" }}>
                  {getCartTotal() ? getCartTotal().toFixed(2) : 0}
                </span>
              </h5>
              <Link to="/signin">
                <button className="btn btn-success">
                  {" "}
                  <i className="fa fa-lock" />
                  <span style={{ padding: "5px 10px" }}>
                    Signin to Checkout
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  return <>{renderCart()}</>;
};

export default Cart;
