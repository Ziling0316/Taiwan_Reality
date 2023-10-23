import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { advertise } from "../data/advertises";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaHouseTsunami } from "react-icons/fa6";
import picture1 from "/public/img/house1.jpg";
import picture2 from "/public/img/house2.jpg";
import picture3 from "/public/img/house3.jpg";
import picture4 from "/public/img/house4.jpg";
import picture5 from "/public/img/house5.jpg";
import picture6 from "/public/img/house6.jpg";
const pictures = [
  {
    pic: picture1,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 1",
  },
  {
    pic: picture2,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 2",
  },
  {
    pic: picture3,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 3",
  },
  {
    pic: picture4,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 4",
  },
  {
    pic: picture5,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 5",
  },
  {
    pic: picture6,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 6",
  },
  {
    pic: picture6,
    title: "台中市北區",
    cost: "1萬/坪",
    alt: "House picture 6",
  },
];

export function House() {
  const aspectRatio = "portrait";
  return (
    <>
      <div className="flex justify-between border-b-2 mt-4 mb-3 pl-3">
        <div className="flex items-center p-2">
          <FaHouseTsunami size={30} color="#0369a1" />
          <h2 className="pl-2">好房推薦</h2>
        </div>
        <div className="flex justify-end items-center pr-4">
          <Button variant="ghost">查看更多</Button>
        </div>
      </div>
      <ScrollArea>
        <div className="flex space-x-4 pl-3">
          
          {pictures.map((item) => (
            <div className="flex flex-col w-[180px] pb-3">
              <Image
                src={item.pic}
                alt={item.alt}
                width={180}
                height={100}
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105 mb-2",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
              />
              <div className="flex items-center justify-center">
                <h3 className="font-medium leading-none">{item.title}</h3>
                <p className="text-xs text-red-600/80">{item.cost}</p>
              </div>
            </div>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
