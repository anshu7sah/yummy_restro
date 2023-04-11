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
