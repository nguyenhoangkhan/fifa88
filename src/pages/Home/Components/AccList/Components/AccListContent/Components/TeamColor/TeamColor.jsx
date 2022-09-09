import { country, fc } from "../../../../../../../../assets/data/teamColor";

const TeamColor = ({ type, ...props }) => {
  return (
    <div className="border-black-border border-b-[1px] py-[24px]">
      <h2 className="text-[18px] text-medium">Team Color {props.title}</h2>
      <div className="flex flex-wrap justify-between gap-x-[43.5px] gap-y-[21px] mt-[20px]">
        {type === "country"
          ? country.map((img, idx) => (
              <img
                key={idx}
                className="w-[34px] h-[34px] object-cover cursor-pointer hover:scale-105 duration-300"
                src={img}
                alt=""
              />
            ))
          : fc.map((img, idx) => (
              <img
                key={idx}
                className="w-[34px] h-[34px] object-cover cursor-pointer hover:scale-105 duration-300"
                src={img}
                alt=""
              />
            ))}
      </div>
    </div>
  );
};

export default TeamColor;
