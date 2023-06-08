import TrendingCard from "./TrendingCard";

const TrendingSection = ({ data }) => {
  return (
    <>
      <h2 className="section-container mb-4 text-center md:text-start lg:mb-10">
        Trending Properties
      </h2>
      <TrendingCard
        key={1}
        firstCard={"firstCard"}
        data={data}
        flexDirection={"md:flex-row"}
      />

      <TrendingCard
        key={2}
        secondCard={"secondCard"}
        data={data}
        flexDirection={"md:flex-row-reverse"}
      />
    </>
  );
};

export default TrendingSection;
