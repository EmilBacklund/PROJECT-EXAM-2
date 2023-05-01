import TrendingCard from './TrendingCard';
import Divider from '../../components/shared/Divider';

const TrendingSection = () => {
  return (
    <>
      <h2 className="text-center md:text-start section-container">
        Trending Properties
      </h2>
      <TrendingCard flexDirection={'md:flex-row'} />
      <div className="mb-5 md:hidden">
        <Divider />
      </div>
      <TrendingCard flexDirection={'md:flex-row-reverse'} />
    </>
  );
};

export default TrendingSection;
