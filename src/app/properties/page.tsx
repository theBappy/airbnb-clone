import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id
  })
  if(listings.length === 0){
    return (
        <ClientOnly>
            <EmptyState 
            title="No properties found"
            subtitle="Looks like you have&apos;nt added any of your property details"
            />
        </ClientOnly>
    )
  }

  return (
    <ClientOnly>
        <PropertiesClient
        listings={listings}
        currentUser={currentUser}
        />
    </ClientOnly>
  )
};

export default PropertiesPage;
