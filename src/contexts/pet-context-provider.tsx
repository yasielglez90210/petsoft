"use client";

import type { TPet } from "@/lib/types";
import React, { createContext, useState } from "react";

interface TPetContext {
  pets: TPet[];
  selectedPetId: string | null;
  selectedPet: TPet | undefined;
  numberOfPets: number;
  handleAddPet: (newPet: Omit<TPet, "id">) => void;
  handleEditPet: (id: string, updatedPet: Omit<TPet, "id">) => void;
  handleCheckoutPet: (id: string | undefined) => void;
  handleCangeSelectedPetId: (id: string) => void;
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
  const [pets, setPets] = useState<TPet[]>(data || []);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  // derived state
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  // event handlers
  const handleAddPet = (newPet: Omit<TPet, "id">) => {
    const id = Date.now().toString();
    setPets((prev) => [...prev, { ...newPet, id }]);
    setSelectedPetId(id);
  };

  const handleEditPet = (id: string, newPetData: Omit<TPet, "id">) => {
    setPets((prev) =>
      prev.map((pet) => (pet.id === id ? { id, ...newPetData } : pet))
    );
    setSelectedPetId(id);
  };

  const handleCheckoutPet = (id: string | undefined) => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  };

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
        handleAddPet,
        handleEditPet,
        handleCheckoutPet,
        handleCangeSelectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
