import { Link, NavLink } from "react-router-dom";

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
          <div className="cursor-pointer">
            <Notification />
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

export default Header;
