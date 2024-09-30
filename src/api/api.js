import axios from "axios";

axios.defaults.baseURL = "https://koreiskayadatcha-backend.onrender.com";

export const sendUserData = async (userData) => {
  try {
    const res = await axios.post("/send-mail", userData);
    return res;
  } catch (err) {
    console.log(err);
  }
};
