import type { Store } from "@/types";
import type React from "react";
import { Button } from "../ui/button";

interface StoreCardProps extends Store {
  opneRatingModal: () => void;
}

export const StoreCard: React.FC<StoreCardProps> = ({
  name,
  email,
  averageRating,
  rating,
  address,
  opneRatingModal,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full h-full p-2 rounded-md bg-muted">
      <div className="flex flex-row w-full my-2">
        <p className="font-bold w-full gap-2">
          Name:<span className="font-thin ml-2">{name}</span>
        </p>
        <p className="font-bold w-full">
          Email:<span className="font-thin ml-2">{email}</span>
        </p>
      </div>

      <p className="font-bold w-full my-2">
        Address:<span className="font-thin ml-2">{address}</span>
      </p>

      <div className="flex flex-row w-full gap-2 my-2">
        <p className="font-bold w-full">
          Average Rating:<span className="font-thin ml-2">{averageRating}</span>
        </p>
        <p className="font-bold w-full">
          Rating:<span className="font-thin ml-2">{rating}</span>
        </p>
      </div>

      <div className="flex w-full justify-end">
        <Button variant="default" onClick={opneRatingModal}>
          Give Rating
        </Button>
      </div>
    </div>
  );
};
