import CustomInput from '../../components/FormComponents/CustomInput';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <div className="relative">
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-textBlack" />
      <CustomInput
        required=""
        colonSymbol=""
        placeholder="Search"
        height="h-[38px]"
        paddingLeft="pl-8"
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="justify-center px-4 py-2 dashboardBtnGradient  border-2 border-primaryRed text-sm text-textBlack font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center ring-secondaryOrange">
          Sort by
          <img className="ml-2" src="/images/dashboard/dropdown.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
