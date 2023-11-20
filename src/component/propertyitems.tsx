import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { property } from "../data/housedata"


export function Select_property(){
    return(
        <>
        <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇性質" />
              <SelectContent>
                {property?property.map((item) => (
                  <SelectItem value={item.value}>{item.option}</SelectItem>
                )):null}
              </SelectContent>
            </SelectTrigger>
          </Select>
        </>

    );
}
