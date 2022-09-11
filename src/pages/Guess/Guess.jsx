import { Europa, Lion, UEFA } from "../../assets/svg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Guess = () => {
  return (
    <div>
      <Header />
      <div className="px-[189px] pt-[16px] pb-[109px]">
        <div className="mb-[26px]">
          <span className="text-primaryBlue">Trang chủ</span> / Dự đoán
        </div>
        <div>
          <h3 className="text-[20px] mb-[20px] font-semibold">
            Trận đấu nổi bật
          </h3>
          <div>
            <div className="h-[118px] bg-darkBlue px-[28px] py-[29px] flex item-center gap-x-[130px]">
              <div className="flex items-center gap-x-[20px] h-full">
                <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/guess%2Flion.png?alt=media&token=528c6c57-58a5-44a1-aa3b-327289d837c2')] bg-contain w-[48.66px] h-[56px]"></div>
                <div className="flex flex-col text-white gap-y-[8px]">
                  <h2 className="font-bold text-[24px]">Premier League</h2>
                  <p className="text-[16px] font-normal">
                    Ngày thi đấu 21/09 21:00
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[16px] text-white font-semibold">
                  Thông tin phần thưởng
                </p>
                <h2 className="text-[24px] font-bold text-primaryBlue">
                  20.000 Coin
                </h2>
              </div>
              <div className="h-full flex items-center gap-x-[32px]">
                <div className="flex items-center gap-x-[14px]">
                  <p className="text-white capitalize text-[14px]">arsenal</p>
                  <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F14.png?alt=media&token=ea8f815b-1a9a-473a-9ca4-fa02545731f1')] w-[46px] h-[46px] bg-contain"></div>
                </div>
                <div className="flex items-center gap-x-[8px]">
                  <p className="flex items-center justify-center w-[48px] h-[48px] text-[16px] score text-white">
                    1
                  </p>
                  <p className="text-white">:</p>
                  <p className="flex items-center justify-center w-[48px] h-[48px] text-[16px] score text-white">
                    1
                  </p>
                </div>
                <div className="flex items-center gap-x-[14px]">
                  <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F3.png?alt=media&token=9103bfd5-2444-4cad-8d3d-3b6d1e0ee4c1')] w-[46px] h-[46px] bg-contain"></div>
                  <p className="text-white capitalize text-[14px]">
                    paris saint germain
                  </p>
                </div>
                <button className="text-white uppercase w-[137px] h-[48px] bg-gradient-blue flex items-center justify-center hover:opacity-80 duration-300 leading-[48px]">
                  gửi dự đoán
                </button>
              </div>
            </div>
            <div className="mt-[20px]">
              <div className="flex justify-between h-[48px] border-b-[1px] border-borderColor">
                <div className="flex items-center ">
                  <div className="relative flex items-center gap-x-[8px] border-r-[1px] border-r-borderColor border-t-[1px] border-t-primaryBlue px-[16px] py-[14px] cursor-pointer">
                    <Lion />{" "}
                    <span className="text-primaryBlue font-medium text-[14px]">
                      Premier League
                    </span>
                    <div className="absolute bg-white w-full bottom-0 left-0 h-2"></div>
                  </div>
                  <div className="flex items-center gap-x-[8px] px-[16px] py-[14px] cursor-pointer">
                    <UEFA />{" "}
                    <span className="text-primaryBlue font-medium text-[14px]">
                      UEFA Champions League
                    </span>
                  </div>
                  <div className="flex items-center gap-x-[8px] px-[16px] py-[14px] cursor-pointer">
                    <Europa />{" "}
                    <span className="text-primaryBlue font-medium text-[14px]">
                      UEFA Europa League
                    </span>
                  </div>
                </div>
                <select className="text-primaryBlue text-[16px] cursor-pointer outline-none">
                  <option defaultValue>Tuần này</option>
                  <option>Tuần trước</option>
                </select>
              </div>
              <div className="grid grid-cols-3 mt-[20px] gap-x-[24px] mb-[109px]">
                <div className="border-[1px] border-borderColor p-[16px]">
                  <div className="flex flex-col gap-y-[20px]">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-[13px]">
                        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F14.png?alt=media&token=ea8f815b-1a9a-473a-9ca4-fa02545731f1')] bg-contain w-[34px] h-[34px]"></div>
                        <h2 className="capitalize">Arsenal</h2>
                      </div>
                      <input
                        type="text"
                        value="-"
                        disabled
                        className="flex items-center text-center outline-none border-[1px] border-borderColor w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-[13px]">
                        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F3.png?alt=media&token=9103bfd5-2444-4cad-8d3d-3b6d1e0ee4c1')] bg-contain w-[34px] h-[34px]"></div>
                        <h2 className="capitalize">paris saint germain</h2>
                      </div>
                      <input
                        type="text"
                        value="-"
                        disabled
                        className="flex items-center text-center outline-none border-[1px] border-borderColor w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex flex-col gap-y-[16px] mt-[32px]">
                      <div className="flex items-center justify-between">
                        <p>Thời gian diễn ra</p>
                        <b className="text-black-text">Ngày mai,21:00</b>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Giá trị giải thưởng</p>
                        <b className="text-black-text">20.000 Coin</b>
                      </div>
                    </div>
                    <button className="btn-gradident-guess uppercase w-[134px] h-[40px]">
                      gửi dự đoán
                    </button>
                  </div>
                </div>
                <div className="border-[1px] border-borderColor p-[16px]">
                  <div className="flex flex-col gap-y-[20px]">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-[13px]">
                        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F14.png?alt=media&token=ea8f815b-1a9a-473a-9ca4-fa02545731f1')] bg-contain w-[34px] h-[34px]"></div>
                        <h2 className="capitalize">Arsenal</h2>
                      </div>
                      <input
                        type="text"
                        value="-"
                        disabled
                        className="flex items-center text-center outline-none border-[1px] border-borderColor w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-[13px]">
                        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F3.png?alt=media&token=9103bfd5-2444-4cad-8d3d-3b6d1e0ee4c1')] bg-contain w-[34px] h-[34px]"></div>
                        <h2 className="capitalize">paris saint germain</h2>
                      </div>
                      <input
                        type="text"
                        value="-"
                        disabled
                        className="flex items-center text-center outline-none border-[1px] border-borderColor w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex flex-col gap-y-[16px] mt-[32px]">
                      <div className="flex items-center justify-between">
                        <p>Thời gian diễn ra</p>
                        <b className="text-black-text">Ngày mai,21:00</b>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Giá trị giải thưởng</p>
                        <b className="text-black-text">20.000 Coin</b>
                      </div>
                    </div>
                    <button className="btn-gradident-guess uppercase w-[134px] h-[40px]">
                      gửi dự đoán
                    </button>
                  </div>
                </div>
                <div className="border-[1px] border-borderColor p-[16px]">
                  <div className="flex flex-col gap-y-[20px]">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-[13px]">
                        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F14.png?alt=media&token=ea8f815b-1a9a-473a-9ca4-fa02545731f1')] bg-contain w-[34px] h-[34px]"></div>
                        <h2 className="capitalize">Arsenal</h2>
                      </div>
                      <input
                        type="text"
                        value="-"
                        disabled
                        className="flex items-center text-center outline-none border-[1px] border-borderColor w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-[13px]">
                        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/team%20color%20fc%2F3.png?alt=media&token=9103bfd5-2444-4cad-8d3d-3b6d1e0ee4c1')] bg-contain w-[34px] h-[34px]"></div>
                        <h2 className="capitalize">paris saint germain</h2>
                      </div>
                      <input
                        type="text"
                        value="-"
                        disabled
                        className="flex items-center text-center outline-none border-[1px] border-borderColor w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="flex flex-col gap-y-[16px] mt-[32px]">
                      <div className="flex items-center justify-between">
                        <p>Thời gian diễn ra</p>
                        <b className="text-black-text">Ngày mai,21:00</b>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Giá trị giải thưởng</p>
                        <b className="text-black-text">20.000 Coin</b>
                      </div>
                    </div>
                    <button className="btn-gradident-guess uppercase w-[134px] h-[40px]">
                      gửi dự đoán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guess;
