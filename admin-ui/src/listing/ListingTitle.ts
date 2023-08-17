import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "listingCreatedBy";

export const ListingTitle = (record: TListing): string => {
  return record.listingCreatedBy || String(record.id);
};
