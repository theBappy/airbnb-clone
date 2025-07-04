"use client";

import Container from "../components/container";
import Heading from "../components/Heading";
import ListingCard from "../components/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoriteClientsProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoriteClients = ({ listings, currentUser }: FavoriteClientsProps) => {
  return <Container>
    <Heading
    title="Favorites"
    subtitle="List of places you have favorited"
    />
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) =>(
            <ListingCard 
                currentUser={currentUser}
                key={listing.id}
                data={listing}
            />
        ))}
    </div>
  </Container>;
};

export default FavoriteClients;
