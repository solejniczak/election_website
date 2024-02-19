import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

const Search = ({ placeholder = 'Wyszukaj według miejscowości', onSearch }: { placeholder?: string, onSearch: (query: string) => void }) => {
    const [query, setQuery] = useState('');
    const searchParams = useSearchParams();
  
    useEffect(() => {
      const handleSearch = async () => {
        // Dodano warunek sprawdzający, czy query się zmieniło
        if (query !== searchParams.get('search')) {
          onSearch(query);
        }
      };
  
      // Wywołaj funkcję handleSearch po krótkim opóźnieniu (w następnym cyklu renderowania),
      // aby uniknąć problemu z cyklicznym wywoływaniem useEffect.
      const timeoutId = setTimeout(handleSearch, 0);
  
      return () => clearTimeout(timeoutId); // Oczyszczamy timeout przy rozmontowaniu komponentu.
  
    }, [query, onSearch, searchParams]);
  
    return (
      <div className="flex-center min-h-[54px] w-full md:w-1/2 m-auto overflow-hidden rounded-full bg-grey-50 px-4 py-2 border border-gray-600">
        <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
        <Input 
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-regular-16 border-0 bg-grey-50 ng placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    )
  }
  
  export default Search;