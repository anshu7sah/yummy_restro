import { AxiosInstance } from "../../utils/AxiosInstance";

export const createUser = async (user, token) => {
  const { email, sub } = user;

  const headers = { Authorization: `Bearer ${token}` };
  const _id = sub.split("|")[1];

  const payload = { _id, email };
  try {
    await AxiosInstance.post("/api/users", payload, { headers });
  } catch (error) {
    console.log(
      "Error occured at api/user folder structure in frontend",
      error
    );
    throw error;
  }
};

export const getUserAddress = async (id, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const URI = `/api/users/${id}/address`;
    const result = await AxiosInstance.get(URI, { headers });
    return result;
  } catch (error) {
    console.log("Error at getUserAddress at api/user/index.js file", error);
    throw error;
  }
};

export const updateUserAddress = async (id, address, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const URI = `/api/users/${id}/address`;
    const result = await AxiosInstance.put(URI, address, { headers });
    return result;
  } catch (error) {
    console.log("🚀 ~ file: index.js:42 ~ updateUserAddress ~ ̥:", error);
  }
};
