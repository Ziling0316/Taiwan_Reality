import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import { BsFillHouseFill } from "react-icons/Bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { TbScanEye } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiComputerTowerDuotone } from "react-icons/pi";
import { PiCoinsFill } from "react-icons/pi";
import { PiComputerTowerFill } from "react-icons/pi";
import { AiTwotoneNotification } from "react-icons/ai";
import { BsChatDots } from "react-icons/Bs";
import { FaHouseFlag } from "react-icons/fa6";
import { BsPinMapFill } from "react-icons/Bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";
import { AiFillWechat } from "react-icons/ai";
import {BiSolidNetworkChart} from "react-icons/bi"
const buttons = [
  {
    title: "聯賣物件",
    icon: BsFillHouseFill,
    color: "#f87171",
    link: "/choose",
  },
  {
    title: "新增物件",
    icon: AiOutlinePlus,
    color: "#65a30d",
    link: "/addchoose",
  },
  {
    title: "我的市調",
    icon: FaClipboardList,
    color: "#06b6d4",
    link: "",
  },
  {
    title: "我的追蹤",
    icon: TbScanEye,
    color: "#a855f7",
    link: "",
  },
  {
    title: "買方租方",
    icon: FaPeopleGroup,
    color: "#db2777",
    link: "",
  },
  {
    title: "坪數試算",
    icon: PiComputerTowerDuotone,
    color: "#0d9488",
    link: "",
  },
  {
    title: "房貸試算",
    icon: PiComputerTowerFill,
    color: "#3b82f6",
    link: "",
  },
  {
    title: "急售物件",
    icon: PiCoinsFill,
    color: "#fde047",
    link: "",
  },
  {
    title: "平台公告",
    icon: AiTwotoneNotification,
    color: "#6ee7b7",
    link: "",
  },
  {
    title: "案源提報",
    icon: BiSolidNetworkChart,
    color: "#dc2626",
    link: "",
  },
  {
    title: "找房留言",
    icon: BsChatDots,
    color: "#8b5cf6",
    link: "",
  },
  {
    title: "建物收藏",
    icon: FaHouseFlag,
    color: "#1d4ed8",
    link: "",
  },
  {
    title: "土地收藏",
    icon: BsPinMapFill,
    color: "#e11d48",
    link: "",
  },
  {
    title: "合作專區",
    icon: FaPeopleCarryBox,
    color: "#c084fc",
    link: "",
  },
  {
    title: "好康專區",
    icon: FaRegThumbsUp,
    color: "#16a34a",
    link: "",
  },
  {
    title: "建議留言",
    icon: AiFillWechat,
    color: "#dc2626",
    link: "",
  },
];
export function Webbuttons() {
  const aspectRatio = "portrait";
  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex-wrap overflow-hidden rounded-md pl-3 space-y-2">
            {buttons.map((item) => (
              <Button
                asChild
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105 flex-col test-xl shadow-[inset_0px_0px_5px_rgba(0,0,0,0.3)]",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
                variant={"outline"}
              >
                <Link href={item.link}>
                  <item.icon size={30} color={item.color} />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
    </>
  );
}
