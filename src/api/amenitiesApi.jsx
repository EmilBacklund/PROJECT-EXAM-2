export async function fetchAmenities() {
  try {
    const response = await fetch("https://holidays.imats.se/get/amenities");
    if (!response.ok) {
      throw new Error("An error occurred while fetching amenities");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
