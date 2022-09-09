import {
  findAcc as FindAcc,
  player as Player,
  bp as Bp,
  reset as Reset,
  guide as Guide,
  guess as Guess,
  login as Login,
} from "../../assets/svg";

import { Link } from "react-router-dom";
const Header = () => {
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
        <li className="header-list-item">
          {" "}
          <Player className="header-list-item-svg" />
          TÌM CẦU THỦ
        </li>
        <li className="header-list-item">
          {" "}
          <FindAcc className="header-list-item-svg" />
          TÌM ACC
        </li>
        <li className="header-list-item">
          <FindAcc className="header-list-item-svg" />
          NẠP TIỀN
        </li>
        <li className="header-list-item">
          <Bp />
          BƠM BP/FC
        </li>
        <li className="header-list-item">
          <Reset className="header-list-item-svg" />
          GIỜ RESET
        </li>
        <li className="header-list-item">
          <Guide className="header-list-item-svg" />
          HƯỚNG DẪN
        </li>
        <li className="header-list-item">
          <Guess className="header-list-item-svg" />
          DỰ ĐOÁN
        </li>
      </ul>
      <button className="bg-gradient-blue text-white p-[12px] flex align-center gap-x-[8px]">
        <Login /> ĐĂNG NHẬP
      </button>
    </div>
  );
};

export default Header;
