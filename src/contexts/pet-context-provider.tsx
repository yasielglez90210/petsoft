"use client";

import type { TPet } from "@/lib/types";
import React, { createContext, useState } from "react";

interface TPetContext {
  pets: TPet[];
  selectedPetId: string | null;
  selectedPet: TPet | undefined;
  numberOfPets: number;
  handleCangeSelectedPetId: (petId: string) => void;
}

export const PetContext = createContext<TPetContext | undefined>(undefined);

type PetContextProviderProps = {
  children: React.ReactNode;
  data: TPet[];
};

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  // state
  const [pets] = useState<TPet[]>(data || []);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  // derived state
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  // event handlers
  const handleCangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        selectedPet,
        numberOfPets,
        handleCangeSelectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
