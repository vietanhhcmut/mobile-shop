import axios from "axios";

export default axios.create({
  baseURL: "http://localhost",
  headers: {
    Authorization: localStorage.getItem("userToken")
  }
});
