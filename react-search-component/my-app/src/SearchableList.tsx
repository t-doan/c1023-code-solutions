import { useState } from 'react';
import './App.css';

type Props = {
  list: string[];
};

export function SearchableList({ list }: Props) {
  const [query, setQuery] = useState('');

  const matchItems = list.filter((quote) =>
    quote.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div className="wrapper">
      <SearchBar value={query} onChange={(q) => setQuery(q)} />
      <QuoteList items={matchItems} />
    </div>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (query: string) => void;
};
function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
      className="search"
    />
  );
}

type ItemsListProps = {
  items: Props['list'];
};

function QuoteList({ items }: ItemsListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {items.length === 0 && <p>No matches found</p>}
    </ul>
  );
}
