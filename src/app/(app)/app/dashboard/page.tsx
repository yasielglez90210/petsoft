import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import PetButton from "@/components/pet-button";
import PetDetails from "@/components/pet-details";
import PetList from "@/components/pet-list";
import SearchForm from "@/components/search-form";
import Stats from "@/components/stats";
import React from "react";

export default function DashboardPage() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />

        <Stats />
      </div>

      <div className="grid grid-rows-[45px_300px_500px] md:grid-rows-[45px_1fr] md:grid-cols-3 gap-4 md:h-[600px]">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <SearchForm />
        </div>

        <div className="md:row-start-2 md:row-span-full relative">
          <ContentBlock>
            <PetList />

            <PetButton actionType="add" />
          </ContentBlock>
        </div>

        <div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
