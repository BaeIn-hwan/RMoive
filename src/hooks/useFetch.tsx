import { useState, useEffect } from "react";
import apiRequest from "@/apis";
import type { AxiosRequestConfig } from "axios";

const useFetch = (url: string, config: AxiosRequestConfig) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest(url, config);
        console.log(response);
        if (response) {
          setData(response.data);
        }
        // const jsonData = await response.json();
        // setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean-up function
    return () => setData(null);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
