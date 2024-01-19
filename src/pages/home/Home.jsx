import React from "react";

import Container from "../../components/Container";
import WhyUs from "./WhyUs";
import Faq from "./Faq";
import Help from "./Help";
import Review from "./Review";
import Gallery from "./Gallery";
import Orders from "./Orders";
import Headers from "./Headers";
import Banner from "./Banner";
import Difference from "./Difference";

import Gallery2 from "./Gallery2";

const Home = () => {
  return (
      <div className="max-w-full mx-auto mt-28">
          <div className="mx-auto w-full">
            <Container>
              
              <Headers></Headers>
              <Difference></Difference>
              <WhyUs></WhyUs>
              <Banner></Banner>
              <Review></Review>
              <Faq></Faq>
              <Gallery2></Gallery2>
              {/* <Gallery></Gallery> */}
              
              <Orders></Orders>
              <Help></Help>
            </Container>
          </div>
      </div>
  );
};

export default Home;
