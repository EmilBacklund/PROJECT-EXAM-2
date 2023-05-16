import ViewDropdown from './ViewDropdown';
import Searchbar from './Searchbar';

const Dashboard = () => {
  return (
    <main>
      <nav className="flex justify-center mb-4 md:mb-12">
        <div className="cursor-pointer">
          <ViewDropdown />
        </div>
      </nav>
      <div className="md:max-w-[1440px] sm:w-11/12 mx-auto">
        <Searchbar />
      </div>
    </main>
  );
};

export default Dashboard;
