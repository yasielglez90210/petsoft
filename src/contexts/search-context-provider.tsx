"use client";

import React, { createContext, useState } from "react";

interface TSearchContext {
  searchQuery: string;
  handleChangeSearchQuery: (text: string) => void;
}

export const SearchContext = createContext<TSearchContext | undefined>(
  undefined
);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  // state
  const [searchQuery, setSearchQuery] = useState<string>("");

  // event handlers
  const handleChangeSearchQuery = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
