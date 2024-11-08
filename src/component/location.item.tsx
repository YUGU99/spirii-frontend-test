import React from "react";
import {LocationProps} from "./location";

const LocationItem: React.FC<LocationProps> = ({ locationId, address, coordinates, status, maxPower }) => {
    return (
        <tr className="border-b">
            <td className="px-4 py-2">{locationId}</td>
            <td className="px-4 py-2">{address.name}</td>
            <td className="px-4 py-2">{address.city}</td>
            <td className="px-4 py-2">
                <span className={status === "Available" ? "text-green-500" : "text-red-500"}>{status}</span>
            </td>
            <td className="px-4 py-2">{maxPower} kW</td>
            <td className="px-4 py-2">
                {coordinates.lat}, {coordinates.lon}
            </td>
        </tr>
    );
};

export default LocationItem;
