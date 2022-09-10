import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      className="inline-block w-[50%] basis-[48%] "
      to={`/chi-tiet-san-pham/${props.id}`}
    >
      <img className="hover:scale-110 duration-300" src={props.pic} alt="" />
    </Link>
  );
};

export default Card;
