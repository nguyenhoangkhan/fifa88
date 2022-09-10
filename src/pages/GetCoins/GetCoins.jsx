import { useEffect, useState } from "react";
import { Info } from "../../assets/svg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import despositHistory from "../../assets/data/depositHistory";
const GetCoins = () => {
  const [seri, setSeri] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (seri && code && price !== "Chọn mệnh giá thẻ") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [code, seri, price]);

  return (
    <div>
      <Header />
      <div className="px-[188px] my-[36px]">
        <div className="mb-[20px]">
          <span className="text-blue">Trang chủ </span>/ Nạp tiền
        </div>
        <div className="mb-[20px] px-[20px] flex gap-x-[14px] justify-start">
          <Info className="mt-[3px]" />
          <ul>
            <li>
              {" "}
              - Bạn vui lòng chuyển khoản chính xác nội dung để được cộng tiền
              nhanh nhất.
            </li>
            <li>
              - Nếu sau 10 phút từ khi tiền trong tài khoản của bạn bị trừ mà
              vẫn chưa được cộng tiền vui liên hệ Admin để được hỗ trợ.
            </li>
            <li>- Vui lòng không nạp từ bank khác qua bank này (tránh lỗi).</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3 className="px-[20px] text-[20px] text-black-text font-medium mb-[20px]">
            Nội dung chuyển khoản
          </h3>
          <div className="px-[20px] text-center pb-[56px]">
            <h2 className="text-[32px] font-bold">[ID tài khoản] [Số tiền] </h2>
            <p className="text-gray font-normal text-[14px]">
              VD: 123456789 500000
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-[24px] pb-[58px] mb-[24px]">
            <div>
              <div className="h-[54px] flex justify-between items-center bg-black-text p-[16px] text-white">
                <h4 className="text-[16px] font-medium">Ví điện tử Momo </h4>
                <span className="text-[16px]">Tỷ giá: 1VNĐ = 1 Point</span>
              </div>
              <div className="py-[23px] px-[16px]">
                <div className="bg-vcb mb-[10px] w-[144px] h-[49px] bg-contain bg-no-repeat"></div>
                <p className="text-[16px] py-[10px]">
                  Số tài khoản :{" "}
                  <b className="text-black text-[16px]">123456789</b>
                </p>
                <p className="text-[16px] py-[10px]">
                  Chủ tài khoản:{" "}
                  <b className="text-black text-[16px] uppercase">tran van a</b>
                </p>
                <p className="text-[16px] py-[10px]">
                  Nạp tối thiểu:{" "}
                  <b className="text-black text-[16px]">10,000 VNĐ</b>
                </p>
              </div>
              <div className="py-[23px] px-[16px]">
                <div className="bg-mb mb-[10px] w-[144px] h-[49px] bg-contain bg-no-repeat"></div>
                <p className="text-[16px] py-[10px]">
                  Số tài khoản :{" "}
                  <b className="text-black text-[16px]">123456789</b>
                </p>
                <p className="text-[16px] py-[10px]">
                  Chủ tài khoản:{" "}
                  <b className="text-black text-[16px] uppercase">tran van a</b>
                </p>
                <p className="text-[16px] py-[10px]">
                  Nạp tối thiểu:{" "}
                  <b className="text-black text-[16px]">10,000 VNĐ</b>
                </p>
              </div>
            </div>
            <div>
              <div className="h-[54px] flex justify-between items-center bg-pink p-[16px] text-white">
                <h4 className="text-[16px] font-medium">Thẻ cào </h4>
                <span className="text-[16px]">
                  Tỷ giá: 10.000VNĐ = 8.000 Point (Phí 20%)
                </span>
              </div>
              <div className="py-[23px] px-[16px] flex flex-col items-center">
                <div className="bg-momo w-[248px] h-[248px] bg-contain bg-no-repeat"></div>
                <div className="mt-[30px] text-center">
                  <p className="text-[16px] py-[10px]">
                    Số tài khoản :{" "}
                    <b className="text-black text-[16px]">0327 888 999</b>
                  </p>
                  <p className="text-[16px] py-[10px]">
                    Chủ tài khoản:{" "}
                    <b className="text-black text-[16px] uppercase">
                      tran van a
                    </b>
                  </p>
                  <p className="text-[16px] py-[10px]">
                    Nạp tối thiểu:{" "}
                    <b className="text-black text-[16px]">10,000 VNĐ</b>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[54px] flex justify-between items-center bg-orange p-[16px] text-white">
                <h4 className="text-[16px] font-medium">
                  Chuyển khoản ngân hàng{" "}
                </h4>
                <span className="text-[16px]">Tỷ giá: 1VNĐ = 1 Point</span>
              </div>
              <div className="py-[23px] px-[16px]">
                <div className="border-borderColor border-[1px] w-full px-[15px] mb-[16px]">
                  <select
                    id="small"
                    className="w-full h-[48px] cursor-pointer outline-none"
                  >
                    <option defaultValue>Viettel</option>
                    <option>Mobi</option>
                  </select>
                </div>
                <div className="border-borderColor border-[1px] w-full px-[15px] mb-[16px]">
                  <select
                    id="small"
                    className="w-full h-[48px] cursor-pointer outline-none"
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option defaultValue>Chọn mệnh giá thẻ </option>
                    <option>20,000</option>
                    <option>50,000</option>
                    <option>100,000</option>
                    <option>200,000</option>
                    <option>500,000</option>
                  </select>
                </div>
                <div className="border-borderColor border-[1px] w-full px-[15px] mb-[16px]">
                  <input
                    type="text"
                    className="w-full h-[48px]  outline-none"
                    placeholder="Nhập seri của thẻ"
                    value={seri}
                    onChange={(e) => setSeri(e.target.value)}
                  />
                </div>
                <div className="border-borderColor border-[1px] w-full px-[15px] mb-[16px]">
                  <input
                    type="text"
                    className="w-full h-[48px]  outline-none"
                    placeholder="Mã thẻ"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <button
                  className={`bg-gradient-blue text-white w-[111px] h-[48px] ${
                    !valid && "opacity-40 cursor-not-allowed"
                  }`}
                >
                  NẠP NGAY
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[20px] font-[600] mb-[20px]">
              Lịch sử nạp tiền
            </h2>
            <div className="shadow-md ">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 text-center border-borderColor border-[1px] bg-lightBlue"
                    >
                      STT
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                    >
                      Hình thức nạp
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                    >
                      Số tiền (VNĐ)
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                    >
                      Thời gian
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                    >
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {despositHistory.map((data, idx) => (
                    <tr className="bg-white">
                      <td className="py-4 text-center border-[1px] border-borderColor">
                        {idx + 1}
                      </td>
                      <td className="py-4 px-6 border-[1px] border-borderColor">
                        {data.method}
                      </td>
                      <td className="py-4 px-6 border-[1px] border-borderColor">
                        {data.price}
                      </td>
                      <td className="py-4 px-6 border-[1px] border-borderColor">
                        {data.time}
                      </td>
                      <td
                        className={`py-4 px-6 border-[1px] border-borderColor ${
                          !data.valid && "text-red "
                        }`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetCoins;
