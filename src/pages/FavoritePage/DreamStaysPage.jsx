import { FaPlusCircle, FaHandPointRight, FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import CreateCollectionModal from '../../components/CreateCollectionModal';

const DreamStaysPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [collections, setCollections] = useState([]);
  const [showCreateCollectionModal, setCreateCollectionModal] = useState(false);

  useEffect(() => {
    const localFavorites = localStorage.getItem('Favorites');
    const localCollections = localStorage.getItem('collections');

    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }

    if (localCollections) {
      setCollections(JSON.parse(localCollections));
    }
  }, [showCreateCollectionModal]);

  console.log('favorites: ', favorites);
  console.log('collections: ', collections);

  return (
    <main className="section-container">
      <CreateCollectionModal
        open={showCreateCollectionModal}
        setOpen={setCreateCollectionModal}
      />
      <h2 className="mt-4 md:mt-10">Dream Collection</h2>
      <div className="grid grid-cols-1 gap-2 profileSmallScreen:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        <button
          type="button"
          onClick={() => setCreateCollectionModal(true)}
          className=" md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 max-w-[453px]"
        >
          <FaPlusCircle className="mx-auto h-12 w-12 text-secondaryOrange" />
          <span className="mt-2 block text-sm font-semibold text-gray-900">
            Create a new Collection
          </span>
        </button>
        {!collections && (
          <p className="max-w-[453px] md:flex-1">
            Organize your Dream Stays with Dream Collections. Group
            accommodations by destination, trip theme, or any category you
            desire. Make planning your next getaway a breeze with these neatly
            arranged collection of your favourite stays.
          </p>
        )}
        {collections &&
          collections.map((collection, index) => (
            <button
              key={index}
              type="button"
              className=" md:flex-1 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondaryOrange focus:ring-offset-2 max-w-[453px]"
            >
              <span className="mt-2 block text-sm font-semibold text-gray-900">
                {collection.name}
              </span>
              <FaTrashAlt className="absolute text-primaryRed w-6 h-6 right-4 top-4 hover:scale-105 hover:text-red-500 transition" />
            </button>
          ))}
      </div>
      <div className="flex flex-col gap-10 items-center max-w-[453px] md:flex-row md:max-w-[925px] md:justify-between md:items-end">
        <div className="max-w-[453px] md:flex-1">
          <h2 className="mt-4 md:mt-10">Dream Stays</h2>
          <p>
            Save your favorite places to Dream Stays, and access them anytime
            you wish. Browse, compare, and plan your ideal vacation with our
            handpicked selections.
          </p>
          <button className="group secondaryBtn mt-4 uppercase flex justify-center items-center gap-2 hover:text-background hover:bg-primaryRed transition-all duration-300">
            <span>Find Accommodation's</span>
            <span>
              <FaHandPointRight className="w-0 opacity-0 group-hover:w-6 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 animate-bounce-right" />
            </span>
          </button>
        </div>
        <img
          className="max-w-[125px] md:max-w-none "
          src="/images/favoritePageIllustration.svg"
          alt=""
        />
      </div>
    </main>
  );
};

export default DreamStaysPage;
