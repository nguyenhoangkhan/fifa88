const Filter = (props) => {
  return (
    <div className="border-black-border border-b-[1px] pb-[24px]">
      <div className="flex items-center gap-x-[12px] pt-[24px] pb-[20px]">
        <img
          className="w-[20px] h-[20px] object-cover "
          src={props.img}
          alt=""
        />
        <span className="text-[18px] text-medium">{props.title}</span>
      </div>
      <div className="flex justify-between">
        <div>
          <select className="bg-gray-50 border border-gray-300 h-[48px] p-[15px]  text-black-text outline-none cursor-pointer">
            <option defaultValue>Giá min</option>
            <option value="US">United States</option>
          </select>
          <p className="text-[14px] font-light opacity-40 mt-[8px]">
            Min: {props.min}
          </p>
        </div>
        <div>
          <select className="bg-gray-50 border border-gray-300 h-[48px] p-[15px]  text-black-text outline-none cursor-pointer">
            <option defaultValue>Giá max</option>
            <option value="US">United States</option>
          </select>
          <p className="text-[14px] font-light opacity-40 mt-[8px]">
            Max: {props.max}
          </p>
        </div>
      </div>
      <div>
        <input
          className="mt-[20px] w-full h-[48px] px-[15px] py-[14.5px] outline-none text-black-text"
          type="text"
          placeholder={props.placeholderInput}
        />
      </div>
    </div>
  );
};

export default Filter;
