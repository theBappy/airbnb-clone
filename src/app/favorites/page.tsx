import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoriteClients from "./FavoriteClients";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorite found"
          subtitle="Looks like you've no favorite listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
        <FavoriteClients
            listings={listings}
            currentUser={currentUser}
        />
    </ClientOnly>
  )
};

export default ListingPage;
