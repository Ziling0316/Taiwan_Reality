import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
  } from "@/components/ui/select";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { usage } from "../data/housedata";
  export function Select_usage() {
    return (
      <>
        <Select>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="請選擇用途" />
  
            <SelectContent>
              <ScrollArea className="h-72 w-48 rounded-md">
                {usage
                  ? usage.map((item) => (
                      <SelectItem value={item.value}>{item.option}</SelectItem>
                    ))
                  : null}
              </ScrollArea>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </>
    );
  }
  