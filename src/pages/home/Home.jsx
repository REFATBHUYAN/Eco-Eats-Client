import React from "react";

import Container from "../../components/Container";

// import Headers from "./Headers";
import WhyWeBest from "./WhyWeBest";
// import CustomerReview from "./CustomerReview";
import Faq from "./Faq";
// import Gallary from "./Gallary";
// import Orders3 from "./Orders3";
import Help from "./Help";
import Review2 from "./Review2";
import Gallary2 from "./Gallary2";
import Orders from "./Orders";
import Headers2 from "./Headers2";
import Banner from "./Banner";
import TypesOfChuijhal from "./TypesOfChuijhal";

const Home = () => {
  return (
    <>
      <div className="max-w-full mx-auto mt-28">
        <>
          <div className="mx-auto w-full">
            <Container>
              <Headers2></Headers2>
              {/* <Headers></Headers> */}
              <TypesOfChuijhal></TypesOfChuijhal>
              <WhyWeBest></WhyWeBest>
              <Banner></Banner>
              <Review2></Review2>
              {/* <CustomerReview></CustomerReview> */}
              <Faq></Faq>
              {/* <Gallary></Gallary> */}
              <Gallary2></Gallary2>
              <Orders></Orders>
              {/* <Orders3></Orders3> */}
              <Help></Help>
            </Container>
          </div>
        </>
      </div>
    </>
  );
};

export default Home;
