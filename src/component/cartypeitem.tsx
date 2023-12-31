import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import { cartype } from "../data/housedata"

export function Select_cartype({ parkingSpaceTypeId, onParkingSpaceTypeIdChange }: { parkingSpaceTypeId: string, onParkingSpaceTypeIdChange: (e: string) => void }){
    return(
        <>
        <Select  value={parkingSpaceTypeId} onValueChange={(e) => onParkingSpaceTypeIdChange(e)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇車位型態" />
              <SelectContent>
                {cartype?cartype.map((item) => (
                  <SelectItem value={item.value}>{item.option}</SelectItem>
                )):null}
              </SelectContent>
            </SelectTrigger>
          </Select>
        </>

    );
}
