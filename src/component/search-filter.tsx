import React from 'react';

interface SearchFilterProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    statusFilter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) => {
    return (
        <div className="flex space-x-4">
            <input
                type="text"
                placeholder="Search by location"
                className="border rounded-md p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
                className="border rounded-md p-2"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >
                <option value="">All Status</option>
                <option value="Available">Available</option>
                <option value="Suspended">Suspended</option>
                <option value="In use">In use</option>
            </select>
        </div>
    );
};

export default SearchFilter;
