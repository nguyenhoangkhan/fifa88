import { useParams } from "react-router-dom";
import { useState } from "react";

import AccDetailImages from "./Components/AccDetailImages";
import Cards from "../../assets/data/Cards";
import { Coin, Info } from "../../assets/svg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const AccDetail = () => {
  const { slug } = useParams();
  const [isShowPopup, setShowPopup] = useState(false);
  return (
    <>
      <Header />
      {Cards.filter((card) => card.id === slug).map((card) => (
        <div key={card.id} className="px-[187px] py-[16px] pb-[192px]">
          <div className="mb-[26px]">
            <span className="text-primaryBlue">Trang chủ</span> / ID : {card.id}
          </div>
          <div className="mb-[30px]">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-[18px]">ID Acc</p>
                <h2 className="text-[24px] font-bold">{card.id}</h2>
              </div>
              <div className="flex items-center gap-x-[24px]">
                <div className="flex items-center gap-x-[12px]">
                  <Coin /> <h2 className="text-[24px] font-bold">12.000.000</h2>
                </div>
                <button
                  className="bg-gradient-blue text-white w-[152px] h-[48px]"
                  onClick={() => setShowPopup(true)}
                >
                  MUA NGAY
                </button>
              </div>
            </div>
          </div>
          <AccDetailImages />
          <div className="flex justify-between">
            <div className="flex gap-x-[24px]">
              <div className="pr-[92px]">
                <p className="text-[18px]">GTĐH</p>
                <h2 className="font-bold text-[40px] ">308M</h2>
              </div>
              <div className="pr-[92px]">
                <p className="text-[18px]">BP Trắng</p>
                <h2 className="font-bold text-[40px] ">263M</h2>
              </div>
              <div className="pr-[92px]">
                <p>Team Color</p>
                <div className="flex items-center mt-[12px]">
                  <img
                    className="w-[103px] h-[40px] object-cover"
                    src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2FFrame%2070.png?alt=media&token=9d7738be-0162-47ac-82f1-80e24db1c9b1"
                    alt=""
                  />
                  <div className="mx-[12px] w-[1px] h-[20px] border-[#C8DAE3] border-[1px] "></div>
                  <img
                    className="w-[103px] h-[40px] object-cover"
                    src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2Fliverpool.png?alt=media&token=73e890f6-72ae-4c66-bf07-a12ab9a65903"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-[392px] flex gap-x-[14px]">
              <Info />
              Congue at eu ut ac. Euismod non egestas facilisis euismod enim, id
              pulvinar. Egestas diam viverra sit metus id ullamcorper ultrices
              tristique. Vitae fusce volutpat cursus leo, vel.{" "}
            </div>
          </div>
        </div>
      ))}
      {isShowPopup && (
        <div className="bg-lightTransparent w-full h-full top-0 bottom-0  fixed z-[99] flex items-center justify-center overflow-hidden">
          <div className="w-[343px] h-[412px] bg-white p-[32px] flex items-center justify-center flex-col shadow-box-shadow ">
            <img
              className="w-[104px] h-[106px]"
              src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/popup%2Fcheck.png?alt=media&token=899f2e42-e401-4bac-a5e0-42b9a85cf6d7"
              alt=""
            />
            <h2 className="text-center font-bold text-[24px] mb-[14px]">
              Mua acc thành công
            </h2>
            <p className="text-gray text-[16px] text-center">
              Bạn đã mua thành công acc ID: 12333450009 Thông tin tài khoản đã
              được gửi qua số điện thoại 0327 888 999 trong tối đa 20p. Nếu có
              thắc mắc, vui lòng liên hệ hotline 1234 5678
            </p>
            <button
              className="bg-gradient-blue uppercase w-full h-[48px] text-white text-[16px] mt-[24px] "
              onClick={() => setShowPopup(false)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AccDetail;
