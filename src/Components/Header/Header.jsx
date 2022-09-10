import {
  findAcc as FindAcc,
  player as Player,
  bp as Bp,
  reset as Reset,
  guide as Guide,
  guess as Guess,
  login as Login,
} from "../../assets/svg";

import { Link, NavLink } from "react-router-dom";
const Header = ({ setShowLogin }) => {
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
      <button
        className="bg-gradient-blue text-white p-[12px] flex align-center gap-x-[8px]"
        onClick={() => setShowLogin(true)}
      >
        <Login /> ĐĂNG NHẬP
      </button>
    </div>
  );
};

export default Header;
