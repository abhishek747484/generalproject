import { useState, useEffect } from 'react';

// Delays updating a value until the user stops typing
// Usage: const debouncedSearch = useDebounce(searchTerm, 300)
function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export default useDebounce;
