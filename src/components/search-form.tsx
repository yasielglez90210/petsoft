"use client";

import { useSearchContext } from "@/lib/hooks";
import React from "react";

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <form className="w-full h-full">
      <input
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
        type="search"
        placeholder="Search pets"
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition hover:bg-white/30 focus:bg-white/50 placeholder:text-white/50"
      />
    </form>
  );
}
