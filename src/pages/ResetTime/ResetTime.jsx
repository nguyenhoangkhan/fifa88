import resetTime from "../../assets/data/resetTime";
import { ArrowThin, ChevTable, Search } from "../../assets/svg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const ResetTime = () => {
  return (
    <div>
      <Header />
      <div className="px-[189px] py-[16px]">
        <div className="mb-[26px]">
          <span className="text-primaryBlue">Trang chủ</span> / Giờ Reset
        </div>
        <div className="mb-[100px]">
          <div className="grid grid-cols-[4.5fr,1fr,1fr,1fr] gap-x-[12px] mb-[20px]">
            <div className="border-borderColor h-[48px] border-[1px] relative">
              <input
                className="w-full h-full  pr-[15px] pl-[34px] outline-none"
                type="text"
                placeholder="Nhập tên cầu thủ"
              />
              <div className="absolute left-[12px] top-[50%] translate-y-[-50%]">
                <Search color="#082C3E" className="opacity-50" />
              </div>
            </div>
            <div className="border-borderColor h-[48px] border-[1px] ">
              <input
                className="w-full h-full p-[15px]  outline-none"
                type="text"
                placeholder="Overall min"
              />
            </div>
            <div className="border-borderColor h-[48px] border-[1px]">
              <input
                className="h-full w-full  p-[15px]  outline-none"
                type="text"
                placeholder="Overall max"
              />
            </div>
            <div className="border-borderColor h-[48px] border-[1px] px-[15px] py-[13px]">
              <select className="h-full w-full uppercase text-primaryBlue cursor-pointer  outline-none">
                <option className="uppercase">mùa thẻ</option>
              </select>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-center border-borderColor border-[1px] bg-lightBlue"
                >
                  Tên cầu thủ
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue flex justify-between items-center"
                >
                  Chỉ số Overall
                  <span className="cursor-pointer">
                    <ChevTable />
                  </span>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                >
                  Mùa thẻ
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                >
                  Thời gian reset
                </th>
              </tr>
            </thead>
            <tbody>
              {resetTime.map((data, idx) => (
                <tr className="bg-white" key={idx}>
                  <td className="py-4 px-6 border-[1px] border-borderColor">
                    {data.name}
                  </td>
                  <td className="py-4 px-6 border-[1px] border-borderColor">
                    {data.overall}
                  </td>
                  <td className="py-4 px-6 border-[1px] border-borderColor flex items-center gap-x-[10px]">
                    <img
                      src={data.seasonLogo}
                      alt=""
                      className="w-[30px] h-[30px]"
                    />
                    <span>{data.season}</span>
                  </td>
                  <td
                    className={`py-4 px-6 border-[1px] border-borderColor 
                    }`}
                  >
                    {data.resetTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-x-[12px] mt-[24px] flex justify-center">
            <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              <ArrowThin color="#082C3E" className="rotate-180 opacity-50" />
            </button>
            <button className="pagination-btn active bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              1
            </button>
            <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              2
            </button>
            <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              3
            </button>
            <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              4
            </button>
            <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              5
            </button>
            <button className="pagination-btn bg-[#ECF3F6] w-[39px] h-[39px] flex items-center justify-center hover:scale-110 duration-200">
              <ArrowThin color="#082C3E" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetTime;
