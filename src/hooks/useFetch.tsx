// Hooks
import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState<object>();

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
    };

    fetchData();
  }, [url]);

  return { data };
}

export { useFetch };
