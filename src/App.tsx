import React, { useEffect, useState } from 'react';
import { LocationProps } from './component/location';
import { getLocationData } from './location/service/location.service';
import LocationList from './component/location.list';
import './index.css';

const App: React.FC = () => {
    const [locations, setLocations] = useState<LocationProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLocationData(searchQuery, statusFilter);
                setLocations(data);
            } catch (error) {
                console.error('Error fetching location data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchQuery, statusFilter]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Location List</h1>

            <div className="mb-4 flex space-x-4 justify-center">
                <input
                    type="text"
                    className="border p-2 rounded-md w-full sm:w-auto"
                    placeholder="Search by location name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    className="border p-2 rounded-md w-full sm:w-auto"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">All Statuses</option>
                    <option value="Available">Available</option>
                    <option value="Suspended">Suspended</option>
                    <option value="In use">In use</option>
                </select>
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <LocationList locations={locations} />
            )}
        </div>
    );
};

export default App;
