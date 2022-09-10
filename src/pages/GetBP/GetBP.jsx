import { Link } from "react-router-dom";

import getBp from "../../assets/data/getBp";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const GetBP = () => {
  return (
    <div>
      <Header />
      <div className="px-[189px] py-[16px]">
        <div className="mb-[26px]">
          <span className="text-primaryBlue">Trang chủ</span> / Bơm BP/FC
        </div>
        <div>
          <h3 className="text-[20px] mb-[20px] font-semibold">
            Bảng giá nạp BP/FC
          </h3>
          <div className="mb-[100px]">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                  >
                    Giá Point
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                  >
                    Giá BP
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                  >
                    Giá FC
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 border-borderColor border-[1px] bg-lightBlue"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {getBp.map((data, idx) => (
                  <tr className="bg-white">
                    <td className="py-4 px-6 border-[1px] border-borderColor">
                      200,000
                    </td>
                    <td className="py-4 px-6 border-[1px] border-borderColor">
                      20,000
                    </td>
                    <td className="py-4 px-6 border-[1px] border-borderColor">
                      20,000
                    </td>
                    <td className="py-4 px-2 border-[1px] border-borderColor flex justify-center">
                      <Link
                        to="/nap-tien"
                        className="text-[18px] font-semibold text-primaryBlue hover:underline text-center"
                      >
                        Nạp ngay
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetBP;
