import React, { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  placeholder = 'Search...',
  initialValue = '',
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
}; 