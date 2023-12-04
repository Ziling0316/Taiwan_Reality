import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { category } from "../data/housedata";
import { ScrollArea } from "@/components/ui/scroll-area";
export function Select_category({ landUseTypeId, onLandUseTypeIdChange }: { landUseTypeId: string, onLandUseTypeIdChange: (e: string) => void }) {
  return (
    <>
      <Select value={landUseTypeId} onValueChange={(e) => onLandUseTypeIdChange(e)}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="請選擇類別" />
          <SelectContent>
            <ScrollArea className="h-72 w-48 rounded-md">
              {category
                ? category.map((item) => (
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
