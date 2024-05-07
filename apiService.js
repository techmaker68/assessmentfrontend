import axios from "axios";

class APIService {
  constructor(baseUrl) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  setAuthToken() {
    let token = localStorage.getItem("token");
    if (token) {
      this.axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete this.axiosInstance.defaults.headers.common["Authorization"];
    }
  }

  async fetch(url, method = "GET", data = null) {
    try {
      this.setAuthToken();
      const response = await this.axiosInstance({
        url,
        method,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  get(url) {
    return this.fetch(url);
  }

  post(url, data) {
    return this.fetch(url, "POST", data);
  }
  put(url, data) {
    return this.fetch(url, "PUT", data);
  }
  delete(url, data) {
    return this.fetch(url, "DELETE", data);
  }
}

const apiService = new APIService("http://127.0.0.1:8000/api");

export default apiService;
