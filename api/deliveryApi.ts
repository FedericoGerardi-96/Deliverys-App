import axios from "axios";

const deliveryApi = axios.create({
  baseURL: "/api",
});

export default deliveryApi;
