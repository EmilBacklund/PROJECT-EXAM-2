import { useSelector } from "react-redux";

const SearchHeading = () => {
  const { venueSearch } = useSelector((state) => state.venues);

  return (
    <div className="mb-10">
      <h2 className="section-container capitalize">{venueSearch}</h2>
      <div className="h-0.5 w-full bg-primaryRed md:mt-2"></div>
    </div>
  );
};

export default SearchHeading;
