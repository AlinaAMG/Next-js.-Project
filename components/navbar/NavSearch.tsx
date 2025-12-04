'use client';

import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const urlSearchTerm = searchParams.get('search') || '';
  const [search, setSearch] = useState(urlSearchTerm);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  return (
    <div className="relative ">
      <CiSearch className="absolute right-3  top-1/2 transform -translate-y-1/2 h-4  text-gray-500 dark:text-gray-400 " />
      <Input
        type="search"
        placeholder="search product..."
        className="dark:bg-muted pr-20 pl-4"
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        value={search}
      />
    </div>
  );
};


export default NavSearch;
