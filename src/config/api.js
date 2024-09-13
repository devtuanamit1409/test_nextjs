import axios from "axios";

const fetchData = {
  async get(url) {
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN_DEV}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async post(url, data) {
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN_DEV}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default fetchData;
