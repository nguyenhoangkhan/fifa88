import { Filter, TeamColor, AccShowed } from "./Components";
import { reset as Reset, Search } from "../../../../../../assets/svg";

const AccListContent = () => {
  return (
    <div className="px-[225px] py-[40px]  grid grid-cols-[392px,808px]">
      <div>
        <div className=" text-white z-999 px-[24px] py-[12px]">
          <h1 className="uppercase text-[24px]">bộ lọc</h1>
          <Filter
            img="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fvnd.png?alt=media&token=d695b66e-0cee-438a-8bac-0bdeea55658a"
            title="Giá Acc (Point)"
            min="100.000"
            max="100.000.000"
            placeholderInput="Nhập giá cụ thể"
          />
          <Filter
            img="https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fbp.png?alt=media&token=62409212-a4f6-4bf8-af70-d1af896133fe"
            title="Giá Acc (Point)"
            min="10B"
            max="5000B"
            placeholderInput="Nhập BP cụ thể"
          />
          <TeamColor title="Quốc Gia" type="country" />
          <TeamColor title="CLB" type="fc" />
          <div className="flex flex-col justify-center gap-y-[12px] mt-[24px]">
            <button
              type="text"
              className="uppercase hover:bg-gradient-blue2 flex items-center justify-center w-full h-[52px]  duration-500 gap-x-[8px]"
            >
              <Search />
              tìm kiếm
            </button>
            <button
              type="text"
              className=" flex items-center hover:bg-gradient-blue2 duration-500 justify-center w-full h-[52px] gap-x-[8px]"
            >
              <Reset />
              Đặt lại bộ lọc
            </button>
          </div>
        </div>
      </div>
      <AccShowed />
    </div>
  );
};

export default AccListContent;
