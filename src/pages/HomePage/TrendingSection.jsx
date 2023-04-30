import TrendingCard from './TrendingCard';

const TrendingSection = () => {
  return (
    <div className='section-container'>
      <h2 className='text-center md:text-start'>Trending Properties</h2>
      <TrendingCard />
      <TrendingCard />
    </div>
  );
};

export default TrendingSection;
