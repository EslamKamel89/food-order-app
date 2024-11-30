import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message ?? "Somethig Went Wrong");
  }
  return resData;
}
export default function useHttp(url, config, initalData) {
  const [data, setData] = useState(initalData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(
    async function sendRequest() {
      try {
        setIsLoading(true);
        const resData = await sendHttpRequest(url, config);
        setData(resData);
      } catch (error) {
        setError(error.message || "Something Went Wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );
  useEffect(() => {
    if (config && config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
