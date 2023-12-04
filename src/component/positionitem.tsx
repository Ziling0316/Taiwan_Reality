import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { position } from "../data/housedata"


export function Select_position({ facingId, onFacingIdChange }: { facingId: string, onFacingIdChange: (e: string) => void }){
    return(
        <>
        <Select value={facingId} onValueChange={(e) => onFacingIdChange(e)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇方位" />
              <SelectContent>

                {position?position.map((item) => (
                  <SelectItem value={item.value}>{item.option}</SelectItem>
                )):null}

              </SelectContent>
            </SelectTrigger>
          </Select>
        </>

    );
}
