import TrendingCard from './TrendingCard';

const TrendingSection = () => {
  return (
    <>
      <h2 className="text-center md:text-start section-container mb-4 lg:mb-10">
        Trending Properties
      </h2>
      <TrendingCard flexDirection={'md:flex-row'} />

      <TrendingCard flexDirection={'md:flex-row-reverse'} />
    </>
  );
};

export default TrendingSection;
