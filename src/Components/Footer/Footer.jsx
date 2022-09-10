import {
  findAcc as FindAcc,
  reset as Reset,
  guide as Guide,
  guess as Guess,
  phone as Phone,
  facebook as Facebook,
  youtube as Youtube,
  network as Network,
} from "../../assets/svg";

const Footer = () => {
  return (
    <div className="h-[324px] bg-lightBlue grid grid-cols-4 grid-cols-[2fr,1fr,1fr,1.5fr] px-[40px] py-[48px]">
      <ul>
        <li>
          <a href="">
            <img
              className="w-[148px] h-[44px] object-cover mb-[44px]"
              src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/footer%2Flogofooter.png?alt=media&token=f47f4429-5665-43c4-99cc-857f8ad3d7e0"
              alt=""
            />
          </a>
        </li>
        <li className="mb-[28px] text-[18px]">
          FiFa88.vn | Shop bán acc tự động giá rẻ nhất thị trường
        </li>
        <li>
          <img
            className="w-[260px] h-[47px] object-cover mb-[25px]"
            src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/footer%2Fauth.png?alt=media&token=fdae2e48-a599-46b9-81d0-2f891e4e9b51"
            alt=""
          />
        </li>
        <li>
          <a href="">
            <img
              className=" w-[217px] h-[24px] object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/footer%2Fdesigned.png?alt=media&token=118b5abb-6915-4153-94f5-c46c8cc2df94"
              alt=""
            />
          </a>
        </li>
      </ul>
      <ul>
        <li className="text-black-text">
          <a
            className="text-[20px] font-[550] text-inherit mb-[20px] inline-block flex items-center gap-x-[12px] text-center justify-start "
            href=""
          >
            <FindAcc color="#082c3e" /> Nạp tiền
          </a>
        </li>
        <li className="text-black-text">
          <a
            className="text-[20px] font-[550] text-inherit mb-[20px] inline-block flex items-center gap-x-[12px] text-center justify-start "
            href=""
          >
            <Reset className="ml-[-3px]" color="#082c3e" />
            Giờ reset TTCN
          </a>
        </li>
        <li className="text-black-text">
          <a
            className="text-[20px] font-[550] text-inherit mb-[20px] inline-block flex items-center gap-x-[12px] text-center justify-start "
            href=""
          >
            <Guide className="ml-[-2px]" color="#082c3e" />
            Hướng dẫn
          </a>
        </li>
        <li className="text-black-text">
          <a
            className="text-[20px] font-[550] text-inherit mb-[20px] inline-block flex items-center gap-x-[12px] text-center justify-start "
            href=""
          >
            <Guess color="#082c3e" />
            Câu hỏi
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            className="text-[20px] font-[550] text-black-text mb-[20px] inline-block"
            href=""
          >
            Kho Acc VIP
          </a>
        </li>
        <li>
          <a
            className="text-[20px] font-[550] text-black-text mb-[20px] inline-block"
            href=""
          >
            Kho Acc Sale
          </a>
        </li>
        <li>
          <a
            className="text-[20px] font-[550] text-black-text mb-[20px] inline-block"
            href=""
          >
            Kho Acc Ép Thẻ
          </a>
        </li>
        <li>
          <a
            className="text-[20px] font-[550] text-black-text mb-[20px] inline-block"
            href=""
          >
            Trợ giúp
          </a>
        </li>
      </ul>
      <ul>
        <li className="flex gap-[12px] items-center">
          <Phone />{" "}
          <span className="text-[20px] font-[550] text-black-text inline-block">
            Hotline: 0939 393 999 (9h - 22h)
          </span>
        </li>
        <li className="flex items-center gap-[20px] mt-[16px]">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Youtube />
          </a>
          <a href="#">
            <Network />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
