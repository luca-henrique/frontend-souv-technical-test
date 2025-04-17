import React, { useState } from 'react';
import { SearchForm } from '../../shared/ui/molecules/SearchForm/SearchForm';
import styles from './SearchFeature.module.css';

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
    <div className={styles.searchFeature}>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <ul className={styles.results}>
          {searchResults.map((result, index) => (
            <li key={index} className={styles.resultItem}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}; 