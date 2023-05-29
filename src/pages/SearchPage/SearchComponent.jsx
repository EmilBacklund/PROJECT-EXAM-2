import CustomInput from "../../components/FormComponents/CustomInput";
import Suggestions from "../../components/Suggestions";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useState } from "react";
import DatePicker from "react-date-picker";
import RangeCalendar from "../HomePage/RangeCalendar";
import { useSelector } from "react-redux";
import { PrimaryBtn } from "../../components/StyledButtons";

const SearchComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { venueSearch } = useSelector((state) => state.venues);
  const { guestValue } = useSelector((state) => state.venues);
  const { startDate: venueStartDate } = useSelector((state) => state.venues);
  const { endDate: venueEndDate } = useSelector((state) => state.venues);

  const {
    ready,
    value: locationValue,
    suggestions: { status, data },
    setValue: setLocationValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setLocationValue(address, false);
    clearSuggestions();
  };

  console.log("venueSearch", venueSearch);

  return (
    <div className="mb-2 sm:mb-10">
      <div className=" flex flex-col flex-wrap gap-2  md:flex-row">
        <div className="min-w-[380px] flex-1">
          <Suggestions
            places={data}
            ready={ready}
            value={venueSearch ? venueSearch : locationValue}
            setValue={setLocationValue}
            handleSelect={handleSelect}
            shadow={"input-shadow"}
            marginTop=""
            marginX=""
            rounded="rounded-md"
          />
        </div>
        <div className="flex min-w-[400px] gap-2 md:flex-1">
          <DatePicker
            className="input input-shadow"
            value={venueStartDate ? venueStartDate : startDate}
            onChange={setStartDate}
            format="y-MM-dd"
            minDate={new Date()}
            calendar={<RangeCalendar startDate={startDate} endDate={endDate} />}
          />
          <DatePicker
            className="input input-shadow"
            value={venueEndDate ? venueEndDate : endDate}
            onChange={setEndDate}
            format="y-MM-dd"
            minDate={startDate}
            calendar={<RangeCalendar startDate={startDate} endDate={endDate} />}
          />
        </div>
        <CustomInput
          type="text"
          name="guests"
          placeholder="Guests"
          shadow="input-shadow"
          marginTop=""
          indent="indent-4"
          height="h-12"
          display="hidden"
          value={guestValue ? guestValue : ""}
          onChange={(e) => setGuestValue(e.target.value)}
        />
        <PrimaryBtn width="w-auto" name="SEARCH" flex1="md:flex-1" />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <p className="text-sm">Filters</p>
      </div>
    </div>
  );
};

export default SearchComponent;
