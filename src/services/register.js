import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

class Registration {
  constructor() {}

  async registerUser(user) {
    try {
      const result = await axios.post(API_BASE_URL + "/users", user);

      console.log("api result ---------------", user);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default Registration;
