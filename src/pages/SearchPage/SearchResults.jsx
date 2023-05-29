import { useSelector } from "react-redux";

const SearchResults = () => {
  const { filteredVenues } = useSelector((state) => state.venues);

  console.log("filteredVenues", filteredVenues);

  return (
    <div className="section-container grid grid-cols-2 gap-x-6 gap-y-12">
      {filteredVenues.map((venue) => (
        <div className="rounded-b-3xl border-b border-l border-r border-[#9A9A9A] border-opacity-40 px-2 pb-2">
          <div className="aspect-video max-h-[256px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={venue.coverPhoto}
            />
          </div>
          <div className="flex flex-col justify-between gap-12 px-4 pb-2.5 pt-[18px]">
            <div>
              <h3 className="w-3/4 text-xl font-bold">{venue.title}</h3>
              <div className=" flex gap-1.5 text-sm">
                <p>{venue.beds} beds</p>
                <span>·</span>
                <p>{venue.bathrooms ? venue.bathrooms : 0} bathrooms</p>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-2">
                <img src="/images/starsor.svg" />
                <p className="text-sm font-bold">
                  {!venue.rating && "No rating atm"}
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">{venue.price} /night</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
