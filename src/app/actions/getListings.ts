import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  category?: string;
  locationValue?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      guestCount,
      roomCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    // ✅ Safe date parsing
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // ✅ Ensure both dates are valid
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        query.NOT = {
          reservations: {
            some: {
              OR: [
                {
                  endDate: { gte: start },
                  startDate: { lte: start }
                },
                {
                  startDate: { lte: end },
                  endDate: { gte: end }
                }
              ]
            }
          }
        };
      }
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc"
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString()
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
