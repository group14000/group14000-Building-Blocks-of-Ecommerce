// Import React and user-defined components.
import React from "react";
import Userlist from "../../Components/Users/userLIst"; // Import the 'Userlist' component.
import TripList from "../../Components/TripList/TripList"; // Import the 'TripList' component.

// Define a functional component named 'Home'.
const Home = () => {
  // Return the JSX for the Home page.
  return (
    <div>
      {/* Create a container with a blue background and centered content. */}
      <div
        className="container-fluid mt-4 d-flex flex-column justify-content-center align-items-center"
        style={{ background: "#5ED0F5", height: "300px" }}
      >
        <h1 className="display-4 text-center">Welcome to the Trip List</h1>{" "}
        {/* Display a welcome message. */}
        <button className="btn btn-lg btn-outline-primary mt-3">
          Get our Latest Album
        </button>{" "}
        {/* Add a button element. */}
        <i class="fa-solid fa-video"></i>{" "}
        {/* Add an icon using a class (Note: 'class' should be 'className'). */}
        <img
          style={{ height: "60px", marginTop: "10px" }}
          src="src\Assets\NicePng_video-play-icon-png_1933217.png"
          alt=""
        />{" "}
        {/* Display an image. */}
      </div>
      {/* Uncomment the 'Userlist' component if needed. */}
      {/* <Userlist /> */}
      <h1 className="display-4 text-center mt-1">TURE</h1>{" "}
      {/* Display a heading. */}
      <TripList /> {/* Render the 'TripList' component. */}
    </div>
  );
};

// Export the 'Home' component as the default export.
export default Home;
