import _ from "lodash";

export const addDishToCart = (dish) => {
  let cart = { dishes: [] };
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.dishes.push({ ...dish, count: 1 });
    const uniqueDishes = _.uniqBy(cart.dishes, "_id");
    cart.dishes = uniqueDishes;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
