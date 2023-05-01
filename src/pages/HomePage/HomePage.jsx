import Main from './Main';
import SellingSection from './sellingSection';
import TrendingSection from './TrendingSection';
import HostPromoteSection from './HostPromoteSection';

const HomePage = () => {
  return (
    <>
      <Main />
      <SellingSection title="Affordable Escapes" />
      <SellingSection title="Popular Destinations" />
      <TrendingSection />
      <HostPromoteSection />
    </>
  );
};

export default HomePage;
