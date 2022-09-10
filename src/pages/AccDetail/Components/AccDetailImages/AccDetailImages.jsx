import Splide from "@splidejs/splide";
import { useEffect, useRef } from "react";

const AccDetailImages = () => {
  const main = useRef(null);
  const thumbnails = useRef(null);

  useEffect(() => {
    const main = new Splide("#main-slider", {
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    });

    const thumbnails = new Splide("#thumbnail-slider", {
      rewind: true,
      autoPlay: true,
      fixedHeight: 195,
      speed: 500,
      autoplay: true,
      interval: 1000,
      gap: 10,
      pagination: false,
      cover: true,
      isNavigation: true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
      classes: {
        prev: "acc-detail-image-prev",
        next: "acc-detail-image-next",
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  }, []);

  return (
    <div className="grid grid-cols-[3fr,1fr] gap-x-[24px] h-[513px]">
      <div className="splide" id="main-slider" role="group">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide w-full ">
              <img
                src="https://shopaccfo4.com/uploads/90274d3dc6bbdbcaab772d854095c887fifa4zf%202019-06-19%2010-58-44-588.jpg"
                alt=""
              />
            </li>
            <li className="splide__slide w-full ">
              <img
                src="https://shopaccfo4.com/uploads/8be58da202605b88af8e42e837e35f48fifa4zf%202019-06-19%2010-58-53-304.jpg"
                alt=""
              />
            </li>
            <li className="splide__slide w-full ">
              <img
                src="https://shopaccfo4.com/uploads/fbd3f10737bd15af4c78fd61a93154f6fifa4zf%202019-06-19%2010-59-39-757.jpg"
                alt=""
              />
            </li>
            <li className="splide__slide w-full ">
              <img
                src="https://shopaccfo4.com/uploads/b7340084969f6e2b7e04fba78fa84a73fifa4zf%202019-06-19%2010-59-42-623.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="splide" id="thumbnail-slider" role="group">
        <div className="splide__track h-[484px] relative">
          <ul className="splide__list flex gap-y-[14px] flex-wrap w-full h-full overflow-auto ">
            <li className="splide__slide w-full opacity-40 splide__slide--accDetailImage">
              <img
                src="https://shopaccfo4.com/uploads/90274d3dc6bbdbcaab772d854095c887fifa4zf%202019-06-19%2010-58-44-588.jpg"
                alt=""
              />
            </li>
            <li className="splide__slide w-full opacity-40 splide__slide--accDetailImage">
              <img
                src="https://shopaccfo4.com/uploads/8be58da202605b88af8e42e837e35f48fifa4zf%202019-06-19%2010-58-53-304.jpg"
                alt=""
              />
            </li>
            <li className="splide__slide w-full opacity-40 splide__slide--accDetailImage">
              <img
                src="https://shopaccfo4.com/uploads/fbd3f10737bd15af4c78fd61a93154f6fifa4zf%202019-06-19%2010-59-39-757.jpg"
                alt=""
              />
            </li>
            <li className="splide__slide w-full opacity-40 splide__slide--accDetailImage">
              <img
                src="https://shopaccfo4.com/uploads/b7340084969f6e2b7e04fba78fa84a73fifa4zf%202019-06-19%2010-59-42-623.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccDetailImages;
