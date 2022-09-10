import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import {
  findAcc as FindAcc,
  player as Player,
  bp as Bp,
  reset as Reset,
  guide as Guide,
  guess as Guess,
  login as Login,
  Coin,
  Notification,
  ArrowRight,
} from "../../assets/svg";
import { useUserStore } from "../../store";
import notifications from "../../assets/data/notifications";

const Header = ({ setShowLogin }) => {
  const [user] = useUserStore();
  return (
    <div className="bg-black h-[96px] flex items-center justify-between px-[38px]">
      <Link to="/">
        {" "}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Flogo.png?alt=media&token=79b12e4b-de77-4b69-bf5e-6b0302287087"
          alt=""
          className="w-[131px] h-[39px]"
        />
      </Link>
      <ul className="flex gap-x-[24px]">
        <li className="header-list-li">
          {" "}
          <NavLink className="header-list-item" to="/tim-cau-thu">
            <Player className="header-list-item-svg" />
            TÌM CẦU THỦ
          </NavLink>
        </li>
        <li className="header-list-li">
          {" "}
          <NavLink className="header-list-item" to="/tim-acc">
            <FindAcc className="header-list-item-svg" />
            TÌM ACC
          </NavLink>
        </li>
        <li className="header-list-li">
          <NavLink className="header-list-item" to="/nap-tien">
            <FindAcc className="header-list-item-svg" />
            NẠP TIỀN
          </NavLink>
        </li>
        <li className="header-list-li">
          <NavLink className="header-list-item" to="/bom-bp-fc">
            <Bp />
            BƠM BP/FC
          </NavLink>
        </li>
        <li className="header-list-li">
          <NavLink className="header-list-item" to="/gio-reset">
            <Reset className="header-list-item-svg" />
            GIỜ RESET
          </NavLink>
        </li>
        <li className="header-list-li">
          <NavLink className="header-list-item" to="/huong-dan">
            <Guide className="header-list-item-svg" />
            HƯỚNG DẪN
          </NavLink>
        </li>
        <li className="header-list-li">
          <NavLink className="header-list-item" to="/du-doan">
            <Guess className="header-list-item-svg" />
            DỰ ĐOÁN
          </NavLink>
        </li>
      </ul>
      {user ? (
        <div className="flex gap-x-[20px] items-center">
          <div className="total-coin-wrapper flex items-center gap-x-[7px] bg-rgba w-[139px] h-[40px] justify-center border-white">
            {" "}
            <Coin />{" "}
            <p className="totalCoin text-[20px] font-medium flex items-center leading-[40px]">
              15.000.000
            </p>
          </div>
          <div>
            <Tippy
              offset={[-220, 40]}
              interactive
              render={(attrs) => (
                <div
                  className="bg-white shadow-md w-[496px] py-[18px] "
                  tabIndex="-1"
                  {...attrs}
                >
                  <h3 className=" px-[20px] mb-[16px] text-[20px] font-medium">
                    Thông báo
                  </h3>
                  <ul>
                    {notifications.map((data, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-x-[16px] px-[20px] py-[16px] border-b-[1px] border-borderColor cursor-pointer hover:bg-rgba duration-300"
                      >
                        <img
                          src={data.image}
                          alt=""
                          className="rounded-full w-[38px] h-[38px] object-cover"
                        />
                        <div className="flex justify-between flex-1">
                          <div>
                            <h3 className="text-black-text text-[14px] font-semibold">
                              {data.title}
                            </h3>
                            <p className="text-[14px] font-normal">
                              {data.des}
                              {data.type !== null && (
                                <span className="text-primaryBlue">
                                  &nbsp; ID: 1234567
                                </span>
                              )}
                            </p>
                          </div>
                          <div
                            className={`font-normal text-[14px] ${
                              data.time === "Mới" && "text-primaryBlue"
                            }`}
                          >
                            {data.time}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[14px] mt-[16px] text-center text-primaryBlue hover:underline cursor-pointer">
                    Xem tất cả
                  </p>
                </div>
              )}
            >
              <div className="cursor-pointer">
                <Notification />
              </div>
            </Tippy>
          </div>
          <div className="flex items-center gap-x-[8px] cursor-pointer">
            <div
              className="bg-[url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/avatars%2FEllipse%2015.png?alt=media&token=de0e9e27-cab8-4910-9e3a-c713d046ed99')] bg-contain bg-no-repeat w-[40px] h-[40px]
            "
            ></div>
            <div className="text-white">
              <h3 className="text-[16px]">Williens</h3>
              <p className="text-[14px]">ID: 123456789</p>
            </div>
            <ArrowRight className="rotate-90" color="white" />
          </div>
        </div>
      ) : (
        <button
          className="bg-gradient-blue text-white p-[12px] flex align-center gap-x-[8px]"
          onClick={() => setShowLogin(true)}
        >
          <Login /> ĐĂNG NHẬP
        </button>
      )}
    </div>
  );
};

export default memo(Header);
