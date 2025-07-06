"use client";

import { usePetContext } from "@/lib/hooks";
import { TPet } from "@/lib/types";
import Image from "next/image";
import React from "react";
import PetButton from "./pet-button";

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPet} />

          <OtherInfo pet={selectedPet} />

          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

// ----------------------------------

type Props = {
  pet: TPet | undefined;
};

function TopBar({ pet }: Props) {
  const { id, imageUrl, name } = pet || {};
  const { handleCheckoutPet } = usePetContext();

  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-light">
      <Image
        src={
          imageUrl ??
          "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
        }
        alt="Selected pet image"
        width={75}
        height={75}
        className="w-[75px] h-[75px] rounded-full object-cover"
      />

      <h2 className="text-3xl font-semibold leading-7 ml-5">{name}</h2>

      <div className="ml-auto flex gap-3">
        <PetButton actionType="edit" />
        <PetButton
          actionType="checkout"
          onClick={() => handleCheckoutPet(id)}
        />
      </div>
    </div>
  );
}

function OtherInfo({ pet }: Props) {
  const { ownerName, age } = pet || {};
  return (
    <div className="flex justify-around px-5 py-10 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{ownerName}</p>
      </div>

      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: Props) {
  const { notes } = pet || {};
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mx-8 mb-9 border border-light">
      {notes}
    </section>
  );
}

function EmptyView() {
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-lg text-zinc-500">No pet selected</p>
    </div>
  );
}
