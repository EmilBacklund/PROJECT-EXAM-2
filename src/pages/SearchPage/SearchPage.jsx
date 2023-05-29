import { useSelector } from "react-redux";
import SearchComponent from "./SearchComponent";
import SearchBreadCrumbs from "./SearchBreadCrumbs";
import useLocationParams from "../../hooks/useLocationParams";
import SearchHeading from "./SearchHeading";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const venues = useSelector((state) => state.venues.filteredVenues);
  const { isLoading } = useSelector((state) => state.loader);
  const locationParts = useLocationParams();

  console.log("locationParts", locationParts);

  console.log("Venues from SearchPage", venues);
  return (
    <>
      <SearchBreadCrumbs isLoading={isLoading} locationParts={locationParts} />
      <div className="section-container">
        <SearchComponent />
      </div>
      <SearchHeading />
      <SearchResults />
    </>
  );
};

export default SearchPage;
