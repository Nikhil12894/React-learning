import { useEffect, useState } from "react";
/**
 *
 * @param {*} currency  takes currency code and returns the list for currency conversion rate data
 * @returns
 */
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response?.json())
      .then((dta) => setData(dta[currency]))
      .catch((err) => console.error(err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
