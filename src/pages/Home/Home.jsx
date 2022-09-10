import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Popup from "../../Components/Popup";
import { CardList, AccList } from "./Components";
const Home = () => {
  const [isShowLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Header setShowLogin={setShowLogin} />
      <Splide
        options={{
          autoplay: true,
          type: "loop",
          speed: 500,
          classes: {
            pagination: "splide__pagination section-pagination",
          },
          arrows: false,
        }}
      >
        <SplideSlide>
          <img
            className=" w-[100%]"
            src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fimage%2063.png?alt=media&token=bf95027b-d6fa-4fa0-b2b1-08f5a8b97ed0"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className=" w-[100%]"
            src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fimage%2063.png?alt=media&token=bf95027b-d6fa-4fa0-b2b1-08f5a8b97ed0"
            alt=""
          />
        </SplideSlide>
      </Splide>
      <div className="section-vip relative">
        <img
          className="w-[100%] h-[580px] object-cover opacity-40"
          src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2FVector.png?alt=media&token=c22eea11-070f-420e-9fc1-d0097d9c285a"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full  object-contain flex justify-center items-center">
          <img
            className="max-h-[455px] opacity-40"
            src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2FVIP.png?alt=media&token=3a108fbb-5e7f-499d-9fe1-1023dee1ef76"
            alt=""
          />
        </div>
        <CardList />
      </div>
      <AccList />
      <Footer />
      {isShowLogin && <Popup setShowLogin={setShowLogin} />}
    </div>
  );
};

export default Home;
