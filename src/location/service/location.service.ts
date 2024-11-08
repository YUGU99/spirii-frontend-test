import { LocationProps } from "../../component/location";
import locationResponse from "../location.response";

export const getLocationData = (
    searchQuery: string,
    status: string,
    page: number,
    itemsPerPage: number
): Promise<{ locations: LocationProps[]; totalPages: number }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Filter locations based on search query and status filter
            const filteredLocations = locationResponse.locations
                .filter((location: LocationProps) =>
                    location.address.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .filter((location: LocationProps) =>
                    status ? location.status === status : true
                );

            // Calculate the total number of pages
            const totalItems = filteredLocations.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);

            // Paginate the results
            const startIndex = (page - 1) * itemsPerPage;
            const paginatedLocations = filteredLocations.slice(startIndex, startIndex + itemsPerPage);

            resolve({ locations: paginatedLocations, totalPages });
        }, 1000);
    });
};
