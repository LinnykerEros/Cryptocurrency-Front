import { createContext, useEffect, useState } from "react";
import {
  findAll,
  findAllContentAboutCryptocurrency,
} from "../service/cryptoCurrencyService";

const CryptocurrencyContentContext = createContext({});

function CryptocurrencyContentProvider({ children }: any) {
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState([]);
  const [contentAbout, setContentAbout] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await findAll();
        const responseAbout = await findAllContentAboutCryptocurrency();

        if (response && responseAbout) {
          setCryptoCurrencyList(response);
          setContentAbout(responseAbout);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CryptocurrencyContentContext.Provider
      value={{ cryptoCurrencyList, contentAbout }}
    >
      {children}
    </CryptocurrencyContentContext.Provider>
  );
}

export { CryptocurrencyContentContext, CryptocurrencyContentProvider };
