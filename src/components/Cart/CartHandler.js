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

export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      return cart.dishes;
    }
    return [];
  }
  return [];
};

export const getCartTotal = () => {
  let dishes = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      dishes = cart.dishes;
      let total = _.sumBy(dishes, (dish) => {
        return dish.price * dish.count;
      });
      return total;
    }
  }
};

export const getTotalItemsInCart = () => {
  let cart = {};
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    return cart.dishes ? cart.dishes.length : 0;
  }
  return 0;
};

export const updateDishQuantity = (dish) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const updateDishes = _.map(cart.dishes, (item) => {
        if (item._id === dish._id) {
          item.count = dish.count;
        }
        return item;
      });
      cart.dishes = updateDishes;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};

export const removeDishFromCart = (id, callback) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      _.remove(cart.dishes, { _id: id });
      localStorage.setItem("cart", JSON.stringify(cart));
      callback();
    }
  }
};
