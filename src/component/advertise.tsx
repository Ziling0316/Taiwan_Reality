import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Advertises } from "../data/advertises";
import { Advertiseswork } from "./advertises_work";

export function Advertise() {
  return (
    <>
      <div className="pt-[78px] w-screen p-2 ads-1">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {Advertises.map((advertise) => (
              <Advertiseswork
                key={advertise.name}
                ad={advertise}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
