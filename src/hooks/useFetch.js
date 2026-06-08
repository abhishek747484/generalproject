import { useState, useEffect } from 'react';

// Generic hook to fetch data from any async function
// TODO: Add caching, abort controller, refetch logic
function useFetch(fetchFn) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    fetchFn()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export default useFetch;
