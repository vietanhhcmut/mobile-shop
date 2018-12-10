import axios from "axios";

const axiosValidate = () => axios.create({
  baseURL: "http://localhost",
  headers: {
    Authorization: localStorage.getItem("userToken")
  }
});

export default axiosValidate;