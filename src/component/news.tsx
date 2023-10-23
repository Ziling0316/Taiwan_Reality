import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BiTime } from "react-icons/bi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoNewspaperOutline } from "react-icons/io5";

const newsitems = [
  {
    time: "2023/7/4",
    title: "有關新增聯賣物件說明 - 請點擊查看詳細說明",
  },
  {
    time: "2023/7/1",
    title: "台灣房地網第二支廣告影片首播(外送篇)",
  },
  {
    time: "2023/6/26",
    title: "台灣房地網 業界新聞 Part 3 簡易說明",
  },
  {
    time: "2023/6/14",
    title: "安新建經旅保介紹",
  },
  {
    time: "2023/6/12",
    title: "台灣房地網第一支廣告影片首播(外送篇)",
  },
  {
    time: "2023/6/5",
    title: "一般不動產網站的物件刊登與台灣房地網的聯賣物件刊登比較",
  },
  {
    time: "2023/5/21",
    title: "台灣房地網聯賣概念與眾不同",
  },
];
export function News() {
  return (
    <>
      <div className="flex justify-between border-b-2 mt-4 pl-3">
        <div className="flex items-center p-2">
          <IoNewspaperOutline size={30} color="#fbbf24"/>
          <h2 className="pl-2">業界新聞</h2>
        </div>
        <div className="flex justify-end items-center pr-4">
          <Button variant="ghost">查看更多</Button>
        </div>
      </div>
      <div className="h-8 flex items-center text-gray-400 font-normal text-sm space-x-[200px] pl-3">
        <h3 className="pl-4">發布時間</h3>
        <h3>新聞標題</h3>
      </div>

      <ScrollArea className="h-72 pl-3">
        <div>
          <Table>
            <TableBody>
              {newsitems.map((item) => (
                <TableRow key={item.title}>
                  <TableCell className="flex items-center font-medium">
                    <BiTime />
                    <div className="pl-2">{item.time}</div>
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
      
    </>
  );
}
