import Main from "./Main";
import SellingSection from "./SellingSection";
import TrendingSection from "./TrendingSection";
import HostPromoteSection from "./HostPromoteSection";
import getHomeInfoApi from "../../api/getHomeInfoApi";
import { useEffect, useState } from "react";

const getPopularDestinations = (data) => {
  let bookingCounts = {};

  // Count the number of bookings per city-country pair
  if (!data) return [];
  data.forEach((item) => {
    if (item.location.city && item.location.country) {
      if (
        item.location.city.toLowerCase() === "unknown" ||
        item.location.country.toLowerCase() === "unknown"
      ) {
        return;
      }

      let key = `${item.location.city},${item.location.country}`;
      if (!bookingCounts[key]) {
        bookingCounts[key] = {
          count: item.bookings ? item.bookings.length : 0,
          images: [item.media[0]],
        };
      } else {
        bookingCounts[key].count += item.bookings ? item.bookings.length : 0;
        bookingCounts[key].images.push(item.media[0]);
      }
    }
  });

  // Sort by booking count
  let sortedKeys = Object.keys(bookingCounts).sort(
    (a, b) => bookingCounts[b].count - bookingCounts[a].count
  );

  // Take the top 6
  sortedKeys = sortedKeys.slice(0, 6);

  // Generate the final data
  let popularDestinations = sortedKeys.map((key) => {
    let [city, country] = key.split(",");
    let randomImageIndex = Math.floor(
      Math.random() * bookingCounts[key].images.length
    );
    let image = bookingCounts[key].images[randomImageIndex];

    return {
      id: `${city}-${country}`, // You can change the id as needed
      media: [image],
      location: {
        city: city,
        country: country,
      },
    };
  });

  return popularDestinations;
};

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);

  console.log("popular destinations: ", getPopularDestinations(homeData));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomeInfoApi();
      setHomeData(data);
    };

    fetchData();
  }, []);

  const getCheapVenues = (data) => {
    let sortedData = [...data]
      .filter((item) => item.price > 100)
      .sort((a, b) => a.price - b.price);
    return sortedData.slice(0, 6);
  };

  return (
    <>
      <Main />
      <SellingSection
        data={homeData}
        processItems={getCheapVenues}
        key={1}
        title="Affordable Escapes"
      />
      <SellingSection
        processItems={homeData ? getPopularDestinations : undefined}
        data={homeData}
        key={2}
        title="Popular Destinations"
      />
      <TrendingSection data={homeData ? homeData : null} />
      <HostPromoteSection />
    </>
  );
};

export default HomePage;
