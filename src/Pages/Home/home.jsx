import React from "react";
import Awards from "../../Components/Awards/awards";
import Images from "../../Components/ImageSection/images-section";
import Slider from "../../Components/Slider/slider";
// import AuthProvider from "./../../Context/context";


class Home extends React.Component {
  render() {
     
    return (
      <React.Fragment>
        {/* <AuthProvider> */}
          <Slider />
          <Awards />
          <Images />
 

        {/* </AuthProvider> */}
      </React.Fragment>
    );
  }
}

export default Home;
