import { AxiosInstance } from "../../utils/AxiosInstance";

export const getCategoryList = async () => {
  try {
    const result = await AxiosInstance.get("/api/categories");
    return result;
  } catch (error) {
    console.log("Error Occured at getCategoryList in api folder", error);
    throw error;
  }
};
