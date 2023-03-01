import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Slideshow from "../UI/Slideshow/Slideshow";
import "./Catalog.css";
import { getDishList, getFilteredDishList } from "../../api/dish";
import { getCategoryList } from "../../api/category";
import CheckboxGroup from "../UI/CheckboxGroup/CheckboxGroup";
import BrowseCard from "../UI/BrowseCard/BrowseCard";
import Spinner from "../UI/Spinner/Spinner";
import { addDishToCart } from "../Cart/CartHandler";
import { Notification } from "../UI/Notification/Notification";

const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const showNotification = () => (
    <>
      {show && (
        <Notification show={show} text={"ADD_TO_CART"} close={closeHandler} />
      )}
    </>
  );

  const init = async () => {
    try {
      setLoading(true);
      const result = await getDishList();
      setDishes(result.data);

      //get all categories

      const categoryList = await getCategoryList();
      setCategories(categoryList.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);
  const closeHandler = () => {
    setShow(false);
  };

  const addToCart = (dish) => {
    addDishToCart(dish);
    setShow(true);
  };

  const displayDishes = () => {
    return (
      <>
        {dishes.length > 0 &&
          dishes.map((dish) => {
            return (
              <div className="col-10 col-lg-3 col-md-4 mt-2" key={dish._id}>
                <BrowseCard dish={dish} key={dish._id} addToCart={addToCart} />
              </div>
            );
          })}
      </>
    );
  };
  const displayFilteredDishes = () => {
    return (
      <>
        {filteredDishes.length > 0 &&
          filteredDishes.map((dish) => {
            return (
              <div className="col-10 col-lg-3 col-md-4 mt-2" key={dish._id}>
                <BrowseCard dish={dish} key={dish._id} addToCart={addToCart} />
              </div>
            );
          })}
      </>
    );
  };
  const getFilteredDishes = async (categories) => {
    try {
      const result =
        categories.length > 0
          ? await getFilteredDishList(categories)
          : await getDishList();
      categories.length > 0 ? setDishes([]) : setFilteredDishes([]);
      categories.length > 0
        ? setFilteredDishes(result.data)
        : setDishes(result.data);
    } catch (error) {
      if (error.response) {
        console.log("Error at getFilteredDishes in Catalog", error);
      }
    }
  };

  const renderCatalog = () => {
    return (
      <Layout title="Savor Our Delicacies">
        {showNotification()}
        {loading ? (
          <Spinner />
        ) : (
          <section className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-8 col-12">
                <Slideshow />
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-lg-2 mg-2">
                  <h4>Filter By Category</h4>
                  <CheckboxGroup
                    categories={categories}
                    handleFilter={getFilteredDishes}
                  />
                </div>
                <div className="col-lg-10 mt-2">
                  <div className="row justify-content-center">
                    {displayDishes()}
                    {displayFilteredDishes()}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Layout>
    );
  };
  return <>{renderCatalog()}</>;
};

export default Catalog;
