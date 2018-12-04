import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/BTL_Web/mobile-shop",
  headers: {
    "Authorization:": localStorage.getItem("userToken")
      ? localStorage.getItem("userToken")
      : ""
  }
});
