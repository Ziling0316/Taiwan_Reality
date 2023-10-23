import Image from "next/image";

import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

import { advertise } from "../data/advertises";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  ad: advertise;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function Advertiseswork({
  ad,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={ad.cover}
              alt={ad.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
    </div>
  );
}
