type Prop = {
  onClick(city: string): void;
};

const LocationList = ({ onClick }: Prop) => {
  return (
    <>
      <ul className="mobile:px-5 laptop:px-14 mt-8 text-white/60 font-light">
        <li
          className="pb-4 hover:text-white hover:cursor-pointer mobile:text-sm tablet:text-base"
          onClick={(event) => onClick("Mumbai")}
        >
          Mumbai
        </li>
        <li
          className="pb-4 hover:text-white hover:cursor-pointer mobile:text-sm tablet:text-base"
          onClick={(event) => onClick("Delhi")}
        >
          Delhi
        </li>
        <li
          className="pb-4 hover:text-white hover:cursor-pointer mobile:text-sm tablet:text-base"
          onClick={(event) => onClick("New York")}
        >
          New York
        </li>
        <li
          className="pb-8 hover:text-white hover:cursor-pointer mobile:text-sm tablet:text-base"
          onClick={(event) => onClick("London")}
        >
          London
        </li>
      </ul>
      <hr className="mobile:mx-5 laptop:mx-14 border-1 border-white/60" />
    </>
  );
};

export default LocationList;
