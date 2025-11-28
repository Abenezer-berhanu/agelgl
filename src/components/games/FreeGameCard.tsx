import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pages } from "@/lib/data";
import { Button } from "../ui/button";
import { GiSpeedBoat } from "react-icons/gi";

interface Card {
  title: string;
  total: string;
  chance: string;
  moneyPerEach: string;
  description: string;
  imageUrl: string;
}

function FreeGameCard({ card }: { card: Card }) {
  return (
    <div className="w-full h-full">
      <div className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
        <Image
          width={300}
          height={300}
          alt=""
          src={card.imageUrl}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2 space-y-2">
          <dl className="flex justify-between">
            <div>
              <dt className="text-sm text-gray-500 capitalize">You will get</dt>
              <dd className="text-sm">{card.total}</dd>
            </div>

            <div>
              <dt className="text-sm text-gray-500 capitalize">Chance</dt>

              <dd className="text-sm">{card.chance}</dd>
            </div>

            <div>
              <dt className="text-sm text-gray-500 capitalize">
                Price per chance
              </dt>

              <dd className="text-sm">{card.moneyPerEach}</dd>
            </div>
          </dl>
          {/* put the register button here */}
          <Link href={pages[0].route}>
            <Button className="w-full flex items-center justify-center cursor-pointer">
              Register fast <GiSpeedBoat className="shrink-0" size={40} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FreeGameCard;
