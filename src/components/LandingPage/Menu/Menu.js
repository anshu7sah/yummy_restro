import React from "react";
import Typed from "react-typed";
import image1 from "../../../assets/addl-images/breakfast-thali.jpeg";
import image2 from "../../../assets/addl-images/italian-cobmo-meal.jpeg";
import image3 from "../../../assets/addl-images/enchilladas.jpeg";
import "./Menu.css";

const Menu = () => {
  const renderMenu = () => {
    return (
      <section>
        <Typed
          className="typed-text"
          strings={[
            "Our Daily Spacials",
            "Burger Bonanza",
            "Panipuri",
            "MoMos",
            "Southern Delicacies",
          ]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        <div className="container">
          <a href="/browser">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <div
                className="card"
                style={{
                  width: "192px",
                }}
              >
                <img className="card-img-top" src={image1} alt="Breakfast" />
                <div className="card-body text-muted">
                  <h5 className="card-title">South Indian Breakfast</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "192px",
                }}
              >
                <img className="card-img-top" src={image2} alt="Breakfast" />
                <div className="card-body text-muted">
                  <h5 className="card-title">Italian Combo Meal</h5>
                  <p className="card-text">
                    Assertment of delicious pizza with multiple toppings, and
                    spaghetti.
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "192px",
                }}
              >
                <img className="card-img-top" src={image3} alt="Breakfast" />
                <div className="card-body text-muted">
                  <h5 className="card-title">Mexican Combo Meal</h5>
                  <p className="card-text">
                    Assertment of crunchy dorito server with salsa sauces and
                    mayonnaise.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  };
  return <>{renderMenu()}</>;
};

export default Menu;
