import { LocationProps } from "../../component/location";
import locationResponse from "../location.response";

export const getLocationData = (
    searchQuery: string,
    status: string
): Promise<LocationProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredLocations = locationResponse.locations
                .filter((location: LocationProps) =>
                    location.address.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .filter((location: LocationProps) =>
                    status ? location.status === status : true
                );

            resolve(filteredLocations);
        }, 1000);
    });
};
