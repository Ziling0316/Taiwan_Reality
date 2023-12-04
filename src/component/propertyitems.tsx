import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from "@/components/ui/select";
import React from "react";
import { property } from "../data/housedata"



export function Select_property({ attitudeId, onAttitudeIdChange }: { attitudeId: string, onAttitudeIdChange: (e: string) => void }){
    return(
        <>
        <Select value={attitudeId} onValueChange={(e) => onAttitudeIdChange(e)}>
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

