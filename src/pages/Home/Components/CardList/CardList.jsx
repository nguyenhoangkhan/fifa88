import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const cardArray = [
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard1.png?alt=media&token=ad2733f8-ef7b-414c-b3ff-32ba1f250ec1",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard2.png?alt=media&token=07988249-2531-42f8-9d61-80abb0749dcf",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard3.png?alt=media&token=55a43809-31f4-45a0-9ece-bd510b899b4f",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard1.png?alt=media&token=ad2733f8-ef7b-414c-b3ff-32ba1f250ec1",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard2.png?alt=media&token=07988249-2531-42f8-9d61-80abb0749dcf",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard3.png?alt=media&token=55a43809-31f4-45a0-9ece-bd510b899b4f",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard1.png?alt=media&token=ad2733f8-ef7b-414c-b3ff-32ba1f250ec1",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard2.png?alt=media&token=07988249-2531-42f8-9d61-80abb0749dcf",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard3.png?alt=media&token=55a43809-31f4-45a0-9ece-bd510b899b4f",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard1.png?alt=media&token=ad2733f8-ef7b-414c-b3ff-32ba1f250ec1",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard2.png?alt=media&token=07988249-2531-42f8-9d61-80abb0749dcf",
    alt: "",
  },
  {
    id: "189119990091",
    className: "cursor-pointer hover:scale-105 duration-300",
    src: "https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fcard3.png?alt=media&token=55a43809-31f4-45a0-9ece-bd510b899b4f",
    alt: "",
  },
];

const CardList = () => {
  return (
    <div className="slide-card absolute -mx-[12px] top-0 pb-[30px] left-0 w-full h-full flex flex-col gap-y-[32px] justify-center items-center">
      <h1 className="account-hot-heading uppercase text-[40px] font-bold">
        account hot nhất
      </h1>
      <Splide
        options={{
          perPage: 3,
          autoplay: true,
          gap: 0,
          speed: 500,
          fixedWidth: 408,
          width: 1224,
          fixedHeight: 270,
          rewind: true,
          type: "loop",
          pagination: true,
          classes: {
            prev: "splide__arrow--prev splide__arrow--prev--cardList splide__arrow--cardList",
            next: "splide__arrow--next splide__arrow--next--cardList splide__arrow--cardList",
          },
          breakpoints: {
            768: {
              perPage: 2,
              arrows: false,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {cardArray.map((card, index) => (
          <SplideSlide key={index} className=" gap-0 p-[12px]">
            <Link to={`/chi-tiet-san-pham/${card.id}`}>
              {" "}
              <img className={card.className} src={card.src} alt={card.alt} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CardList;
