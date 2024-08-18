import axios from 'axios';

// Define the API base URL
const API_URL = "http://localhost:8000/api/auth/";

class AuthService {
  // Register a new user
  register(username, email, password) {
    return axios.post(API_URL + "register/", {
      username,
      email,
      password,
    });
  }

  // Log in an existing user
  login(username, password) {
    return axios.post(API_URL + "login/", {
      username,
      password,
    }).then(response => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  // Log out the user
  logout() {
    localStorage.removeItem("user");
  }

  // Get the current user information
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
