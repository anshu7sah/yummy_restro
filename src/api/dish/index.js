import { AxiosInstance } from "../../utils/AxiosInstance";

export const getDishList = async () => {
  try {
    const dishes = await AxiosInstance.get("/api/dishes");
    return dishes;
  } catch (error) {
    console.log("Error occured at api/dish/index.js", error);
  }
};

export const getFilteredDishList = async (categories = []) => {
  const searchFilter = { categories };
  try {
    const result = await AxiosInstance.post(
      "/api/dishes/category/_search",
      searchFilter
    );
    return result;
  } catch (error) {
    console.log("Error occured at getFilterDishList.js in api folder", error);
  }
};
