import TrendingCard from './TrendingCard';

const TrendingSection = () => {
  return (
    <>
      <h2 className='text-center md:text-start section-container'>Trending Properties</h2>
      <TrendingCard flexDirection={'md:flex-row'} />

      <TrendingCard flexDirection={'md:flex-row-reverse'} />
    </>
  );
};

export default TrendingSection;
