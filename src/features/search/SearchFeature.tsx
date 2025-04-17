import React, { useState } from 'react';
import { SearchForm } from '../../shared/ui/molecules/SearchForm/SearchForm';
import { cn } from '../../lib/utils';

export const SearchFeature: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults([`Result 1 for "${query}"`, `Result 2 for "${query}"`]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto py-8">
      <SearchForm onSearch={handleSearch} className="mb-8" />
      {isLoading ? (
        <div className="text-center text-muted-foreground">Loading...</div>
      ) : (
        <ul className="space-y-2">
          {searchResults.map((result, index) => (
            <li
              key={index}
              className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}; 