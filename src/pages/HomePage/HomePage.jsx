import Main from './Main';
import SellingSection from './SellingSection';
import TrendingSection from './TrendingSection';
import HostPromoteSection from './HostPromoteSection';

const HomePage = () => {
  return (
    <>
      <Main />
      <SellingSection key={1} title="Affordable Escapes" />
      <SellingSection key={2} title="Popular Destinations" />
      <TrendingSection />
      <HostPromoteSection />
    </>
  );
};

export default HomePage;
