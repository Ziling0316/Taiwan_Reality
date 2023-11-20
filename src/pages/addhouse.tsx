import React from "react";
import { City } from "@/component/city";
import { Town } from "@/component/town";
import { Navbar } from "@/component/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select_property } from "@/component/propertyitems";
import { Select_source } from "@/component/sourceitems";
import { Select_cartype } from "@/component/cartypeitem";
import { Select_position } from "@/component/positionitem";
import { Select_usage } from "@/component/usageitem";
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

export default function Addhouse() {
  let [value, setValue] = React.useState<string>("");
  return (
    <>
      <div className="h-screen flex-col flex-1">
        <div className="h-16">
          <Navbar />
        </div>
        <h1 className="text-xl font-bold h-16 flex flex-col justify-center ml-4 mr-4">
          新增市調建物 - 建物資料
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
        <Label className="text-base flex-wrap mr-4 flex mt-6 ml-4">
          地址 :
        </Label>
        <div className="flex flex-wrap items-center space-x-3 space-y-3">
          <Label className="ml-1"></Label>
          <Label className="ml-5 text-base">縣市 :</Label>
          <Select onValueChange={(e) => setValue((value = e))}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇市調縣市" />
            </SelectTrigger>
            <SelectContent>
              <City />
            </SelectContent>
          </Select>
          <Label className="text-base">鄉鎮市區 :</Label>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇鄉鎮市區" />
              <SelectContent>
                <Town city={value} />
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Label className="text-base">路段/街 :</Label>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇路段/街" />
              <SelectContent>
                <Town city={value} />
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">巷</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">弄</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">衖</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">之</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <div className="flex">
            <Label className="text-base">號</Label>
            <Label className="text-base">之</Label>
          </div>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">~</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <div className="flex">
            <Label className="text-base">樓</Label>
            <Label className="text-base">之</Label>
          </div>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">總樓高</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">樓</Label>
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">屋齡</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">年</Label>
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">建坪</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">坪</Label>
          <Label className="text-base">地坪</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">坪</Label>
          <RadioGroup defaultValue="無" className="flex items-center space-x-2">
            <div className="space-x-2">
              <RadioGroupItem value="無" id="無">
                無
              </RadioGroupItem>
              <Label>無</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem value="含" id="含">
                含
              </RadioGroupItem>
              <Label>含</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem value="不含" id="不含">
                不含
              </RadioGroupItem>
              <Label>不含</Label>
            </div>
          </RadioGroup>
          <Label className="text-base">車位</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">坪</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
          />
          <Label className="text-base">萬</Label>
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
        <div className="flex items-center ml-4 mt-6 space-x-2">
          <Label className="text-base">格局：</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">房</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">廳</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">衛</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">陽</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
          />
          <Label className="text-base">車</Label>
          <Label className="text-base">朝</Label>
          <Select_position />
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">車位型態：</Label>
          <Select_cartype />
          <Label className="text-base">＋</Label>
          <Select_cartype />
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">來源：</Label>
          <Select_source />
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">用途：</Label>
          <Select_usage />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">備註 :</Label>
          <Textarea
            className="w-[50%]"
            placeholder="請輸入物件其他訊息......(特色,鄰近學區,生活機能......等)"
          />
        </div>
        <Button type="submit" className="mt-6 ml-4 w-32 h-12">下一步</Button>
      </div>
      
    </>
  );
}
