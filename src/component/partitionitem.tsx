import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { partition } from "../data/housedata"
import { ScrollArea } from "@/components/ui/scroll-area";

export function Select_partition(){
    return(
        <>
        <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇分區" />
              <SelectContent>
              <ScrollArea className="h-72 w-48 rounded-md">
                {partition?partition.map((item) => (
                  <SelectItem value={item.value}>{item.option}</SelectItem>
                )):null}
                </ScrollArea>
              </SelectContent>
            </SelectTrigger>
          </Select>
        </>

    );
}
