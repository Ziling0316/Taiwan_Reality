import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { source } from "../data/housedata";
export function Select_source() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="請選擇來源" />

          <SelectContent>
            <ScrollArea className="h-72 w-48 rounded-md">
              {source
                ? source.map((item) => (
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
