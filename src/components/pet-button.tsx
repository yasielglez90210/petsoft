"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";

type PetButtonProps = "add" | "edit" | "checkout";

export default function PetButton({
  actionType,
  onClick,
}: {
  actionType: PetButtonProps;
  onClick?: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (actionType === "add" || actionType === "edit") {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {actionType === "add" ? (
            <Button size="icon" className="absolute bottom-4 right-4">
              <PlusIcon className="w-6 h-6" />
            </Button>
          ) : (
            <Button variant="secondary" onClick={onClick}>
              Edit
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === "add" ? "Add a new pet" : "Edit pet"}
            </DialogTitle>
          </DialogHeader>
          <PetForm
            actionType={actionType}
            onFormSubmission={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    );
  }

  if (actionType === "checkout") {
    return (
      <Button variant="secondary" onClick={onClick}>
        Checkout
      </Button>
    );
  }
}
