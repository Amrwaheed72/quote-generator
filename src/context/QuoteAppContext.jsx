import { createContext, useContext, useState } from "react";

const QuoteAppContext = createContext();

function QuoteAppProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  return (
    <QuoteAppContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </QuoteAppContext.Provider>
  );
}

function useQuoteApp() {
  const context = useContext(QuoteAppContext);
  if (!context) {
    throw new Error("useQuoteApp must be used within a QuoteAppProvider");
  }
  return context;
}

export { QuoteAppProvider, useQuoteApp };
