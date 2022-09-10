import { useRef, useState } from "react";
import { Close, Eye } from "../../assets/svg";

const Popup = ({ setShowLogin }) => {
  const [type, setType] = useState("login");
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  const showPassword = (ref) => {
    if (ref.current.type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  };

  return (
    <div className="bg-lightTransparent fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99]">
      <div className="w-[496px]">
        <div className="h-[60px] bg-darkBlue px-[20px] py-[16px] text-[20px] font-medium flex items-center justify-between text-white">
          <h3>
            {type === "login"
              ? "Đăng nhập"
              : type === "register" ||
                type === "otpRegister" ||
                type === "createPassword"
              ? "Đăng ký"
              : "Quên mật khẩu"}
          </h3>
          <div className="cursor-pointer" onClick={() => setShowLogin(false)}>
            <Close />
          </div>
        </div>
        <div className="bg-white px-[24px] py-[40px]">
          {type === "login" && (
            <>
              <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[16px] text-black-text">
                <legend>Số điện thoại:</legend>
                <input type="text" className="w-full h-full outline-none" />
              </fieldset>
              <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] text-black-text">
                <legend>Mật khẩu:</legend>
                <input type="text" className="w-full h-full outline-none" />
              </fieldset>
              <div className="flex justify-between mt-[16px] mb-[32px]">
                <div className="flex items-center gap-x-[8px] text-[16px]">
                  <input
                    type="checkbox"
                    className="cursor-pointer w-[24px] h-[24px]"
                  />
                  Nhớ tài khoản
                </div>
                <button
                  className="text-primaryBlue text-[14px] font-semibold hover:underline"
                  onClick={() => setType("forgotPassword")}
                >
                  Quên mật khẩu
                </button>
              </div>
              <button className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue mb-[32px] hover:opacity-80 duration-300">
                ĐĂNG NHẬP
              </button>
              <p className="text-center">
                Chưa có tài khoản?{" "}
                <button
                  className="text-primaryBlue text-[14px] font-semibold w-fit hover:underline"
                  onClick={() => setType("register")}
                >
                  Đăng ký
                </button>
              </p>
            </>
          )}
          {type == "register" && (
            <>
              <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[32px] text-black-text">
                <legend>Số điện thoại:</legend>
                <input type="text" className="w-full h-full outline-none" />
              </fieldset>
              <button
                className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue mb-[32px] hover:opacity-80 duration-300"
                onClick={() => setType("otpRegister")}
              >
                gửi mã otp
              </button>
              <p className="text-center">
                Có tài khoản?{" "}
                <button
                  className="text-primaryBlue text-[14px] font-semibold w-fit hover:underline"
                  onClick={() => setType("login")}
                >
                  Đăng nhập
                </button>
              </p>
            </>
          )}
          {type === "otpRegister" && (
            <>
              <p className="text-center text-black-text text-[18px]">
                Nhập mã OTP gồm 5 chữ số đã được gửi đến số điện thoại 0327 888
                999
              </p>
              <div className="grid grid-cols-5 gap-x-[16px] my-[32px]">
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
              </div>
              <button
                className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue mb-[32px] hover:opacity-80 duration-300"
                onClick={() => setType("createPassword")}
              >
                xác nhận
              </button>
              <p className="text-center">
                Chưa nhận được mã?{" "}
                <button
                  className="text-primaryBlue text-[14px] font-semibold w-fit hover:underline"
                  onClick={() => setType("login")}
                >
                  Gửi lại
                </button>
              </p>
            </>
          )}
          {type === "createPassword" && (
            <>
              <p className="text-center text-black-text text-[18px] mb-[32px]">
                Tạo mật khẩu cho tài khoản 0327 888 999
              </p>
              <div>
                <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[32px] text-black-text flex">
                  <legend>Tạo mật khẩu:</legend>
                  <input
                    type="password"
                    className="w-full h-full outline-none"
                    ref={passwordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => showPassword(passwordRef)}
                  >
                    <Eye />
                  </div>
                </fieldset>
                <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[32px] text-black-text flex">
                  <legend>Nhập lại mật khẩu:</legend>
                  <input
                    type="password"
                    className="w-full h-full outline-none"
                    ref={confPasswordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => showPassword(confPasswordRef)}
                  >
                    <Eye />
                  </div>
                </fieldset>
              </div>
              <button className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue mb-[32px] hover:opacity-80 duration-300">
                Tạo mật khẩu
              </button>
              <p className="text-center">
                Có tài khoản?{" "}
                <button
                  className="text-primaryBlue text-[14px] font-semibold w-fit hover:underline"
                  onClick={() => setType("login")}
                >
                  Đăng nhập
                </button>
              </p>
            </>
          )}
          {type === "forgotPassword" && (
            <>
              <p className="text-center text-black-text text-[18px] mb-[32px]">
                Nhập số điện thoại để nhận OTP
              </p>
              <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[32px] text-black-text">
                <legend>Số điện thoại:</legend>
                <input type="text" className="w-full h-full outline-none" />
              </fieldset>
              <button
                className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue hover:opacity-80 duration-300"
                onClick={() => setType("confOtpForgotPass")}
              >
                gửi mã otp
              </button>
            </>
          )}
          {type === "confOtpForgotPass" && (
            <>
              <p className="text-center text-black-text text-[18px]">
                Nhập mã OTP gồm 5 chữ số đã được gửi đến số điện thoại 0327 888
                999
              </p>
              <div className="grid grid-cols-5 gap-x-[16px] my-[32px]">
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
                <input
                  className="border-borderColor border-[1px] h-[48px] outline-none text-center"
                  type="text"
                />
              </div>
              <button
                className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue mb-[32px] hover:opacity-80 duration-300"
                onClick={() => setType("createNewPassword")}
              >
                xác nhận
              </button>
              <p className="text-center">
                Chưa nhận được mã?{" "}
                <button
                  className="text-primaryBlue text-[14px] font-semibold w-fit hover:underline"
                  onClick={() => setType("login")}
                >
                  Gửi lại
                </button>
              </p>
            </>
          )}
          {type === "createNewPassword" && (
            <>
              <p className="text-center text-black-text text-[18px] mb-[32px]">
                Tạo mật khẩu cho tài khoản 0327 888 999
              </p>
              <div>
                <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[32px] text-black-text flex">
                  <legend>Tạo mật khẩu:</legend>
                  <input
                    type="password"
                    className="w-full h-full outline-none"
                    ref={passwordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => showPassword(passwordRef)}
                  >
                    <Eye />
                  </div>
                </fieldset>
                <fieldset className="border-borderColor border-2 px-[16px] pb-[12px] h-[62px] mb-[32px] text-black-text flex">
                  <legend>Nhập lại mật khẩu:</legend>
                  <input
                    type="password"
                    className="w-full h-full outline-none"
                    ref={confPasswordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => showPassword(confPasswordRef)}
                  >
                    <Eye />
                  </div>
                </fieldset>
              </div>
              <button className="text-white block mx-auto uppercase h-[48px] w-[152px] bg-gradient-blue  hover:opacity-80 duration-300">
                Tạo mật khẩu
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
