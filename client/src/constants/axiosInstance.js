import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/BTL_Web/mobile-shop",
  headers: {
    "Content-Type": " application/x-www-form-urlencoded"
  }
});
