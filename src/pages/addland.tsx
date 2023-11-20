import React from "react";
import { City } from "@/component/city";
import { Town } from "@/component/town";
import { Navbar } from "@/component/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select_property } from "@/component/propertyitems";
import { Select_source } from "@/component/sourceitems";
import { Select_partition } from "@/component/partitionitem";
import { Select_category } from "@/component/categoryitem";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export default function Addland() {
  let [value, setValue] = React.useState<string>("");
  return (
    <>
      <div className="h-screen flex-col flex-1">
        <div className="h-16">
          <Navbar />
        </div>
        <h1 className="text-xl font-bold h-16 flex flex-col justify-center ml-4 mr-4">
          新增市調物件 - 土地資料
        </h1>
        <hr className="ml-4 mr-4"></hr>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">物件名稱 :</Label>
          <Input
            id="object_name"
            type="text"
            placeholder="請輸入物件名稱"
            className="relative w-[70%]"
          />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-8">性質 :</Label>
          <Select_property />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-4">市調日 :</Label>
          <Input id="object_date" type="date" className="relative w-[10%]" />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-8">來源 :</Label>
          <Select_source />
        </div>
        <Label className="text-base flex-wrap mr-4 flex ml-4 mt-6">
          地段 :
        </Label>
        <div className="flex flex-wrap items-center space-x-3 space-y-3">
          <Label className="ml-1"></Label>
          <Label className="text-base">縣市 :</Label>
          <Select onValueChange={(e) => setValue((value = e))}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="請選擇市調縣市" />
            </SelectTrigger>
            <SelectContent>
              <City />
            </SelectContent>
          </Select>
          <Label className="text-base">鄉鎮市區 :</Label>
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="請選擇鄉鎮市區" />
              <SelectContent>
                <Town city={value} />
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[10%]"
          />
          <Label className="text-base">段</Label>
          <Input
            id="object_small_road_section"
            type="text"
            className="relative w-[10%]"
          />
          <Label className="text-base">小段</Label>
          <Input id="-" type="text" className="relative w-[5%]" />
          <Label className="text-base">-</Label>
          <Input id="object_number" type="text" className="relative w-[5%]" />
          <Label className="text-base">地號等</Label>
          <Input
            id="object_amount"
            type="number"
            min="0"
            max="100"
            className="relative w-[5%]"
          />
          <Label className="text-base">筆</Label>
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">土地：</Label>
          <Input
            id="object_ping"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">坪</Label>
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">總價：</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">萬</Label>
          <Label className="text-base">單價/坪：</Label>
          <Input
            id="object_ping(unit price)"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">萬</Label>
        </div>

        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">臨路：</Label>
          <RadioGroup defaultValue="無" className="flex items-center">
            <div className="flex items-center space-x-2 ml-3">
              <RadioGroupItem value="無" id="無" />
              <Label >無</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="有" id="有" />
              <Label >有</Label>
            </div>
          </RadioGroup>
          <Label className="text-base">路寬</Label>
          <Input
            id="object_road_width"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">米</Label>

          <Label className="text-base">面寬：</Label>
          <div className="flex items-center space-x-4 ml-7">
            <Input
              id="object_width"
              type="text"
              className="relative w-[15%] flex items-center"
            />
            <Label className="text-base">米</Label>

            <Label className="text-base">縱深：</Label>
            <Input
              id="object_length"
              type="text"
              className="relative w-[15%] flex items-center"
            />
            <Label className="text-base">米</Label>
          </div>
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">使用分區 :</Label>
          <Select_partition />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">使用類別 :</Label>
          <Select_category />
        </div>

        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">備註 :</Label>
          <Textarea className="w-[50%]" placeholder="請輸入物件其他訊息......(特色,鄰近學區,生活機能......等)"/>
        </div>
        <Button type="submit" className="mt-6 ml-4 w-32 h-12">下一步</Button>
      </div>
    </>
  );
}
