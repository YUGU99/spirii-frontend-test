import React from 'react';
import { LocationProps } from './location';

interface LocationListProps {
    locations: LocationProps[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
    return (
        <table className="table-auto w-full border-collapse">
            <thead>
            <tr>
                <th className="px-4 py-2 border">Location ID</th>
                <th className="px-4 py-2 border">Location Name</th>
                <th className="px-4 py-2 border">City</th>
                <th className="px-4 py-2 border">Street</th>
                <th className="px-4 py-2 border">ZipCode</th>
                <th className="px-4 py-2 border">ISO</th>

                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Max Power</th>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Connector Type</th>

                <th className="px-4 py-2 border">Coordinates</th>
            </tr>
            </thead>
            <tbody>
            {locations.length > 0 ? (
                locations.map((location) => (
                    <tr key={location.locationId}>
                        <td className="px-4 py-2 border">{location.locationId}</td>
                        <td className="px-4 py-2 border">{location.address.name}</td>
                        <td className="px-4 py-2 border">{location.address.city}</td>
                        <td className="px-4 py-2 border">{location.address.street}</td>
                        <td className="px-4 py-2 border">{location.address.zipCode}</td>
                        <td className="px-4 py-2 border">{location.address.countryISO}</td>

                        <td className="px-4 py-2 border">{location.status}</td>
                        <td className="px-4 py-2 border">{location.maxPower}</td>
                        <td className="px-4 py-2 border">{location.type}</td>
                        <td className="px-4 py-2 border">{location.connectorType}</td>
                        <td className="px-4 py-2 border">{`${location.coordinates.lat}, ${location.coordinates.lon}`}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={5} className="text-center px-4 py-2">No locations found</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default LocationList;
