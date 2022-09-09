import { ArrowRight, Search } from "../../../../../../../../assets/svg";
import Cards from "../../../../../../../../assets/data/Cards";
import Card from "../Card/";

const AccShowed = () => {
  return (
    <div>
      <div className="flex justify-between pl-[24px] py-[12px] items-center flex-1">
        <div className="ml-[16px] text-[18px] text-white">
          <span className="quantity-acc text-[20px]">210</span> acc
        </div>
        <div className="flex gap-x-[17px] items-center">
          <div>
            <span className="text-[#6FC1E5] text-[14px]">
              Thời gian đăng:{" "}
              <select className="bg-transparent outline-none text-white cursor-pointer">
                <option className="bg-black" defaultValue>
                  Mới nhất
                </option>
                <option className="bg-black">Cũ nhất</option>
              </select>{" "}
            </span>{" "}
          </div>
          <div>
            <span className="text-[#6FC1E5] text-[14px]">
              Giá:{" "}
              <select className="bg-transparent outline-none text-white cursor-pointer">
                <option className="bg-black" defaultValue>
                  Từ thấp đến cao
                </option>
                <option className="bg-black">Từ cao đến thấp</option>
              </select>{" "}
            </span>{" "}
          </div>
          <div className="w-[178px] h-[46px] relative bg-search-input  px-[12px] ">
            <Search className="absolute translate-y-[-50%] top-[50%]" />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full h-full outline-none pl-[26px] text-white bg-transparent border-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-between gap-y-[25px] pl-[24px] pt-[24px]">
        {Cards.map((card) => (
          <Card key={card.id} id={card.id} pic={card.pic} />
        ))}
      </div>
      <div className="flex px-[24px] mt-[24px] justify-between items-center">
        <div>
          <span className="text-[#2D92C2]">Hiển thị: </span>
          <select className="text-white bg-transparent outline-none">
            <option className="bg-black">10 acc</option>
            <option className="bg-black">20 acc</option>
            <option className="bg-black">30 acc</option>
          </select>
          <span className="text-white">của 130 acc</span>
        </div>
        <div className="flex gap-x-[12px]">
          <button className="pagination-btn active bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center">
            1
          </button>
          <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center">
            2
          </button>
          <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center">
            3
          </button>
          <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center">
            4
          </button>
          <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center">
            5
          </button>
          <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccShowed;
