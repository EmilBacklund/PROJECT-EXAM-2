import Main from './Main';
import SellingSection from './sellingSection';
import TrendingSection from './TrendingSection';

const HomePage = () => {
  return (
    <>
      <Main />
      <SellingSection title='Affordable Escapes' />
      <SellingSection title='Popular Destinations' />
      <TrendingSection />
    </>
  );
};

export default HomePage;
