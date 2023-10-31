import React from 'react';
import Userlist from '../../Components/Users/userLIst';
import TripList from '../../Components/TripList/TripList';

const Home = () => {
  return (
    <div>
      <div className="container-fluid mt-4 d-flex flex-column justify-content-center align-items-center" style={{ background: '#5ED0F5', height: '300px' }}>
        <h1 className="display-4 text-center">Welcome to the Trip List</h1>
        <button className="btn btn-lg btn-outline-primary mt-3">Get out Latest Album</button>
        <i class="fa-solid fa-video"></i>
        {/* <FontAwesomeIcon icon="fa-thin fa-play" /> */}
        <img style={{height: '60px', marginTop: '10px'}} src="src\Assets\NicePng_video-play-icon-png_1933217.png" alt="" />
      </div>
      {/* <Userlist /> */}
      <h1 className="display-4 text-center mt-1">TURE</h1>
      <TripList/>
    </div>
  );
};

export default Home;
