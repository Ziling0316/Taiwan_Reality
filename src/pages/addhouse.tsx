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
import { token }from '../pages/login';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export default function Addhouse() {
  let [value, setValue] = React.useState<string>("");

  const [mkHouse, setMkHouse] = React.useState(
    {
      "date"           : "",
      "source_type_id" : "",
      "age"            : "",
      "name"          : "",
      "attribute_id"  : "",
      "usage_type_id" : "",
      "city_id"  : "",
      "dist_id"  : "",
      "road_id"  : "",
      "lane"     : "",
      "alley"    : "",
      "suballay" : "",
      "number1"  : "",
      "number2"  : "",
      "number3"  : "",
      "floor1"   : "",
      "floor2"   : "",
      "floor3"   : "",
      "total_floor": "",
      "building_ping" : "",
      "land_ping"     : "",
      "total_price"   : "",
      "unit_price"    : "",
      "facing_id"     : "",
      "has_parking_space_id" : "無",
      "parking_space_type1_id" : "",
      "parking_space_type2_id" : "",
      "parking_space_ping"     : "",
      "parking_space_price"    : "",
      "bedroom1_count"   : "",
      "bedroom2_count"   : "",
      "livingroom_count" : "",
      "bathroom_count"   : "",
      "restroom_count"   : "",
      "balcony_count"    : "",
      "parking_count"    : "",
      "note" : "",
      "contact": "",
      "telephone1": "",
      "telephone2": "",
      "cellphone1": "",
      "cellphone2": "",
      "email": "",
      'access_token': token
    });

    const handleMkHouse = async (e: any) => {
      e.preventDefault();
      try {
        console.log(JSON.stringify(mkHouse));
        const response =  fetch("http://127.0.0.1:5000/api/objects/marketsurveys/buildings", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mkHouse),
          });
       
          if ((await response).status === 200) {
              console.log('Data sent successfully.');
          } else  if ((await response).status === 1) {
              console.log('一般會員上限 10 筆');
          } else  if ((await response).status === 999) {
              console.log('errorlist');
          } else {
              console.log('fail');
          }
      } catch (error) {
          console.log('error')
      }
    }
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
            value={mkHouse.name} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'name': e.target.value })}
          />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-8">性質 :</Label>
          <Select_property 
            attitudeId={mkHouse.attribute_id} 
            onAttitudeIdChange={(e: any) =>  setMkHouse({ ...mkHouse, 'attribute_id': e })}
          />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-4">市調日 :</Label>
          <Input 
            id="object_date" 
            type="date" 
            className="relative w-[10%]"
            value={mkHouse.date} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'date': e.target.value })}
          />
        </div>
        <Label className="text-base flex-wrap mr-4 flex mt-6 ml-4">
          地址 :
        </Label>
        <div className="flex flex-wrap items-center space-x-3 space-y-3">
          <Label className="ml-1"></Label>
          <Label className="ml-5 text-base">縣市 :</Label>
          <Select onValueChange={(e) => {setValue((value = e)); setMkHouse({ ...mkHouse, 'city_id': e});}}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇市調縣市" />
            </SelectTrigger>
            <SelectContent>
              <City />
            </SelectContent>
          </Select>
          <Label className="text-base">鄉鎮市區 :</Label>
          <Select onValueChange={(e) => {setValue((value = e)); setMkHouse({ ...mkHouse, 'dist_id': e});}}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇鄉鎮市區" />
              <SelectContent>
                <Town city={mkHouse.city_id} />
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Label className="text-base">路段/街 :</Label>
          <Select onValueChange={(e) => {setValue((value = e)); setMkHouse({ ...mkHouse, 'road_id': e});}}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="請選擇路段/街" />
              <SelectContent>
                <Town city={mkHouse.city_id} />
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.lane} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'lane': e.target.value })}
          />
          <Label className="text-base">巷</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.alley} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'alley': e.target.value })}
          />
          <Label className="text-base">弄</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.suballay} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'suballay': e.target.value })}
          />
          <Label className="text-base">衖</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.number1} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'number1': e.target.value })}
          />
          <Label className="text-base">之</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.number2} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'number2': e.target.value })}
          />
          <div className="flex">
            <Label className="text-base">號</Label>
            <Label className="text-base">之</Label>
          </div>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.number3} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'number3': e.target.value })}
          />
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.floor1} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'floor1': e.target.value })}
          />
          <Label className="text-base">~</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.floor2} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'floor2': e.target.value })}
          />
          <div className="flex">
            <Label className="text-base">樓</Label>
            <Label className="text-base">之</Label>
          </div>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.floor3} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'floor3': e.target.value })}
          />
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">總樓高</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.total_floor} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'total_floor': e.target.value })}
          />
          <Label className="text-base">樓</Label>
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">屋齡</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.age} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'age': e.target.value })}
          />
          <Label className="text-base">年</Label>
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">建坪</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.building_ping} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'building_ping': e.target.value })}
          />
          <Label className="text-base">坪</Label>
          <Label className="text-base">地坪</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.land_ping} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'land_ping': e.target.value })}
          />
          <Label className="text-base">坪</Label>
          <RadioGroup 
            className="flex items-center space-x-2"
            value={mkHouse.has_parking_space_id}
          >
            <div className="space-x-2">
              <RadioGroupItem 
                value="無" 
                id="無"
                onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                  setMkHouse({...mkHouse, 'has_parking_space_id': '無'})}}  
              >
                無
              </RadioGroupItem>
              <Label>無</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem 
                value="含" 
                id="含"
                onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                  setMkHouse({...mkHouse, 'has_parking_space_id': '含'})}}  
              >
                含
              </RadioGroupItem>
              <Label>含</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem 
                value="不含" 
                id="不含"
                onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                  setMkHouse({...mkHouse, 'has_parking_space_id': '不含'})}}  
              >
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
            value={mkHouse.parking_space_ping} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'parking_space_ping': e.target.value })}
          />
          <Label className="text-base">坪</Label>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[5%]"
            value={mkHouse.parking_space_price} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'parking_space_price': e.target.value })}
          />
          <Label className="text-base">萬</Label>
        </div>

        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">總價：</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.total_price} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'total_price': e.target.value })}
          />
          <Label className="text-base">萬</Label>
          <Label className="text-base">單價/坪：</Label>
          <Input
            id="object_ping(unit price)"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.unit_price} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'unit_price': e.target.value })}
          />
          <Label className="text-base">萬</Label>
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-2">
          <Label className="text-base">格局：</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.bedroom1_count} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'bedroom1_count': e.target.value })}
          />
          <Label className="text-base">房</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.livingroom_count} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'livingroom_count': e.target.value })}
          />
          <Label className="text-base">廳</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.bathroom_count} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'bathroom_count': e.target.value })}
          />
          <Label className="text-base">衛</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.balcony_count} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'balcony_count': e.target.value })}
          />
          <Label className="text-base">陽</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkHouse.parking_count} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'parking_count': e.target.value })}
          />
          <Label className="text-base">車</Label>
          <Label className="text-base">朝</Label>
          <Select_position 
            facingId={mkHouse.facing_id} 
            onFacingIdChange={(e: any) =>  setMkHouse({ ...mkHouse, 'facing_id': e })}
          />
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">車位型態：</Label>
          <Select_cartype 
            parkingSpaceTypeId={mkHouse.parking_space_type1_id} 
            onParkingSpaceTypeIdChange={(e: any) =>  setMkHouse({ ...mkHouse, 'parking_space_type1_id': e })}
          />
          <Label className="text-base">＋</Label>
          <Select_cartype 
            parkingSpaceTypeId={mkHouse.parking_space_type2_id} 
            onParkingSpaceTypeIdChange={(e: any) =>  setMkHouse({ ...mkHouse, 'parking_space_type2_id': e })}
          />
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">來源：</Label>
          <Select_source 
            souceTypeId={mkHouse.source_type_id} 
            onSouceTypeIdChange={(e: any) =>  setMkHouse({ ...mkHouse, 'source_type_id': e })}
          />
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">用途：</Label>
          <Select_usage 
            usageTypeId={mkHouse.usage_type_id} 
            onUsageTypeIdChange={(e: any) =>  setMkHouse({ ...mkHouse, 'usage_type_id': e })}
          />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">備註 :</Label>
          <Textarea
            className="w-[50%]"
            placeholder="請輸入物件其他訊息......(特色,鄰近學區,生活機能......等)"
            value={mkHouse.note} 
            onChange={(e) =>  setMkHouse({ ...mkHouse, 'note': e.target.value })}
          />
        </div>
        <Button type="submit" className="mt-6 ml-4 w-32 h-12" onClick={handleMkHouse}>下一步</Button>
      </div>
      
    </>
  );
}
