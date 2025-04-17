import React, { useState } from 'react';
import { SearchForm } from '../../shared/ui/molecules/SearchForm/SearchForm';
import { useApi } from '../../shared/api/useApi';

interface SearchResult {
  id: number;
  title: string;
  description: string;
}

const mockSearchApi = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      title: `Result 1 for "${query}"`,
      description: 'This is a sample search result description.',
    },
    {
      id: 2,
      title: `Result 2 for "${query}"`,
      description: 'Another sample search result description.',
    },
  ];
};

export const SearchFeature: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: searchResults, isLoading, error } = useApi<SearchResult[]>(
    ['search', searchQuery],
    () => mockSearchApi(searchQuery),
    {
      enabled: !!searchQuery,
    }
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto py-8">
      <SearchForm onSearch={handleSearch} className="mb-8" />

      {error && (
        <div className="text-center text-destructive">
          Error: {error.message}
        </div>
      )}

      {isLoading ? (
        <div className="text-center text-muted-foreground">Loading...</div>
      ) : (
        <ul className="space-y-2">
          {searchResults?.map((result) => (
            <li
              key={result.id}
              className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              <h3 className="font-semibold">{result.title}</h3>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}; 