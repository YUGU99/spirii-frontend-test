import React, {useEffect, useState, useCallback, useRef} from 'react';
import { LocationProps } from './component/location';
import { getLocationData } from './location/service/location.service';
import LocationList from './component/location.list';
import './index.css';

const App: React.FC = () => {
    const [locations, setLocations] = useState<LocationProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true); // Track if there is more data to load

    const itemsPerPage = 10;
    const cache: { [key: string]: LocationProps[] } = {}; // Cache to store fetched data

    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    const fetchData = useCallback(async (query: string, status: string, page: number) => {
        const cacheKey = `${query}-${status}-${page}`;
        // If the data is already cached, use it
        if (cache[cacheKey]) {
            setLocations(cache[cacheKey]);
            return;
        }

        setLoading(true);
        try {
            const data = await getLocationData(query, status, page, itemsPerPage);
            setLocations((prevLocations) => [
                ...prevLocations,
                ...data.locations,
            ]);
            setTotalPages(data.totalPages);
            setHasMore(page < data.totalPages); // Update if there's more data to load
            cache[cacheKey] = data.locations; // Cache the data for future use
        } catch (error) {
            console.error('Error fetching location data:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch data when search query, status filter, or page changes
    //if more time, need to add a button to load more data
    //can change the limit for each page
    useEffect(() => {
        const delayFetch = () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
            debounceTimeout.current = setTimeout(() => {
                setLocations([]);
                fetchData(searchQuery, statusFilter, 1); // Always fetch the first page
            }, 500); // Delay by 500ms to wait for user to stop typing
        };

        delayFetch();
    }, [searchQuery, statusFilter, fetchData]);

    const handleScroll = (e: React.UIEvent) => {
        const target = e.target as HTMLElement;
        const bottom = target.scrollHeight === target.scrollTop + target.clientHeight;
        if (bottom && hasMore && !loading) {
            setCurrentPage((prev) => prev + 1);
        }
    };


    useEffect(() => {
        if (currentPage === 1) return;
        fetchData(searchQuery, statusFilter, currentPage);
    }, [currentPage, searchQuery, statusFilter, fetchData]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen" onScroll={handleScroll}>
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

            {loading && currentPage === 1 ? (
                <div className="text-center">Loading...</div>
            ) : (
                <LocationList locations={locations} />
            )}

            {loading && currentPage > 1 && (
                <div className="text-center">Loading more...</div>
            )}
        </div>
    );
};

export default App;
