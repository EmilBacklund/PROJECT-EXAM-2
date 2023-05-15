import { useDispatch, useSelector } from 'react-redux';
import { setSelectedView } from '../../store/modules/displayedDashboardViewSlice';
import ViewDropdown from './ViewDropdown';

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedView = useSelector(
    (state) => state.displayedDashboardView.views
  );

  console.log(selectedView);

  return (
    <main>
      <nav className="flex justify-center">
        <div className="cursor-pointer">
          <ViewDropdown />
        </div>
      </nav>
    </main>
  );
};

export default Dashboard;
