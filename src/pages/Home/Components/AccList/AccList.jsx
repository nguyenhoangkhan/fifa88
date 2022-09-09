import AccListContent from "./Components/AccListContent";

const AccList = () => {
  return (
    <div className="bg-darkBlue relative ">
      <div className="bg-vector-pattern absolute top-0 left-0 right-0 h-[100%] opacity-20 -z-10"></div>
      <div className="bg-balls-pattern absolute top-0 left-0 right-0 h-[100%] opacity-40 -z-10"></div>
      <AccListContent />
    </div>
  );
};

export default AccList;
