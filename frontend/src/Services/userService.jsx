// Import the 'axios' library to make HTTP requests.
import axios from "axios";

// Define a class named 'UserService'.
export class UserService {
  // Create a static property 'serverUrl' to store the base URL for user data.
  static serverUrl = "https://jsonplaceholder.typicode.com/users";

  // Create a static method 'getAllusers' to fetch all users.
  static getAllusers() {
    // Use 'axios' to send a GET request to the 'serverUrl'.
    // This method returns a Promise that resolves with the response from the server.
    return axios.get(this.serverUrl);
  }
}
