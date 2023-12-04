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
import { token }from '../pages/login';

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export default function Addland() {
  let [value, setValue] = React.useState<string>("");

  const [mkLand, setMkLand] = React.useState(
  {
      'date'           : "",          //市調日
      'source_type_id' : "",          //來源            
      'name'          : "",
      'attribute_id'  : "",           //性質
      'city_id'       : "",
      'dist_id'       : "",
      'section_id'    : "",
      'subsection_id' : "",
      'land_number1'  : "",
      'land_number2'  : "",
      'record_count'  : "",
      'land_ping'     : "",
      'total_price'   : "",
      'unit_price'    : "",
      'has_adjacency_road' : "無",
      'road_width'    : "",               //路寬
      'frontage_width': "",               //面寬
      'depth'         : "",               //縱深
      'zoning_id'     : "",               //使用分區
      'land_use_type_id'   : "",          //使用類別
      'note' : "",                        //備註
      'contact': "",
      'telephone1': "",
      'telephone2': "",
      'cellphone1': "",
      'cellphone2': "",
      'email': "",
      'access_token': token
  });
  const handleMkLand = async (e: any) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(mkLand));
      // console.log(token);
      const response =  fetch("http://127.0.0.1:5000/api/objects/marketsurveys/lands", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(mkLand),
        });
        //  const text = await response.text();
        // console.log((await response).status);
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
            value={mkLand.name} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'name': e.target.value })}
          />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-8">性質 :</Label>
          <Select_property  
            attitudeId={mkLand.attribute_id} 
            onAttitudeIdChange={(e: any) =>  setMkLand({ ...mkLand, 'attribute_id': e })}/>
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-4">市調日 :</Label>
          <Input 
            id="object_date" 
            type="date" 
            className="relative w-[10%]"
            value={mkLand.date} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'date': e.target.value })} />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base pr-8">來源 :</Label>
          <Select_source 
            souceTypeId={mkLand.source_type_id} 
            onSouceTypeIdChange={(e: any) =>  setMkLand({ ...mkLand, 'source_type_id': e })}/>
        </div>
        <Label className="text-base flex-wrap mr-4 flex ml-4 mt-6">
          地段 :
        </Label>
        <div className="flex flex-wrap items-center space-x-3 space-y-3">
          <Label className="ml-1"></Label>
          <Label className="text-base">縣市 :</Label>
          <Select onValueChange={(e) => {setValue((value = e)); setMkLand({ ...mkLand, 'city_id': e});}}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="請選擇市調縣市" />
            </SelectTrigger>
            <SelectContent>
              <City />
            </SelectContent>
          </Select>
          <Label className="text-base">鄉鎮市區 :</Label>
          <Select onValueChange={(e) => {setValue((value = e)); setMkLand({ ...mkLand, 'dist_id': e});}}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="請選擇鄉鎮市區" />
              <SelectContent>
                <Town city={mkLand.city_id} />
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Input
            id="object_road_section"
            type="text"
            className="relative w-[10%]"
            value={mkLand.section_id} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'section_id': e.target.value })}
          />
          <Label className="text-base">段</Label>
          <Input
            id="object_small_road_section"
            type="text"
            className="relative w-[10%]"
            value={mkLand.subsection_id} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'subsection_id': e.target.value })}
          />
          <Label className="text-base">小段</Label>
          <Input 
            id="-" 
            type="text" 
            className="relative w-[5%]"
            value={mkLand.land_number1}  
            onChange={(e) =>  setMkLand({ ...mkLand, 'land_number1': e.target.value })}
          />
          <Label className="text-base">-</Label>
          <Input 
            id="object_number" 
            type="text" 
            className="relative w-[5%]" 
            value={mkLand.land_number2}  
            onChange={(e) =>  setMkLand({ ...mkLand, 'land_number2': e.target.value })}/>
          <Label className="text-base">地號等</Label>
          <Input
            id="object_amount"
            type="number"
            min="0"
            max="100"
            className="relative w-[5%]"
            value={mkLand.record_count} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'record_count': e.target.value })}
          />
          <Label className="text-base">筆</Label>
        </div>
        <div className="flex items-center space-x-4 mt-6 ml-4">
          <Label className="text-base">土地：</Label>
          <Input
            id="object_ping"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkLand.land_ping} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'land_ping': e.target.value })}
          />
          <Label className="text-base">坪</Label>
        </div>
        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">總價：</Label>
          <Input
            id="object_total_price"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkLand.total_price} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'total_price': e.target.value })}
          />
          <Label className="text-base">萬</Label>
          <Label className="text-base">單價/坪：</Label>
          <Input
            id="object_ping(unit price)"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkLand.unit_price} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'unit_price': e.target.value })}
          />
          <Label className="text-base">萬</Label>
        </div>

        <div className="flex items-center ml-4 mt-6 space-x-4">
          <Label className="text-base">臨路：</Label>
          <RadioGroup 
            // defaultValue='無'
            value={mkLand.has_adjacency_road}
            className="flex items-center"
          >
            <div className="flex items-center space-x-2 ml-3">
              <RadioGroupItem 
                value="無" 
                id="無" 
                onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                setMkLand({...mkLand, 'has_adjacency_road': '無'})}}/>
              <Label >無</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="有" 
                id="有"
                onClick={(e :React.MouseEvent<HTMLButtonElement>) => {
                setMkLand({...mkLand, 'has_adjacency_road': '有'})}}
              /> 
              <Label >有</Label>
            </div>
          </RadioGroup>
          <Label className="text-base">路寬</Label>
          <Input
            id="object_road_width"
            type="text"
            className="relative w-[5%] flex items-center"
            value={mkLand.road_width} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'road_width': e.target.value })}
          />
          <Label className="text-base">米</Label>

          <Label className="text-base">面寬：</Label>
          <div className="flex items-center space-x-4 ml-7">
            <Input
              id="object_width"
              type="text"
              className="relative w-[15%] flex items-center"
              value={mkLand.frontage_width} 
              onChange={(e) =>  setMkLand({ ...mkLand, 'frontage_width': e.target.value })}
            />
            <Label className="text-base">米</Label>

            <Label className="text-base">縱深：</Label>
            <Input
              id="object_length"
              type="text"
              className="relative w-[15%] flex items-center"
              value={mkLand.depth} 
              onChange={(e) =>  setMkLand({ ...mkLand, 'depth': e.target.value })}
            />
            <Label className="text-base">米</Label>
          </div>
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">使用分區 :</Label>
          <Select_partition 
            zoneId={mkLand.zoning_id} 
            onZoneIdChange={(e: any) =>  setMkLand({ ...mkLand, 'zoning_id': e })}
          />
        </div>
        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">使用類別 :</Label>
          <Select_category 
            landUseTypeId={mkLand.land_use_type_id} 
            onLandUseTypeIdChange={(e: any) =>  setMkLand({ ...mkLand, 'land_use_type_id': e })}
          />
        </div>

        <div className="space-x-4 flex ml-4 items-center mt-6">
          <Label className="text-base">備註 :</Label>
          <Textarea 
            className="w-[50%]" 
            placeholder="請輸入物件其他訊息......(特色,鄰近學區,生活機能......等)"
            value={mkLand.note} 
            onChange={(e) =>  setMkLand({ ...mkLand, 'note': e.target.value })}
          />
        </div>
        <Button type="submit" className="mt-6 ml-4 w-32 h-12" onClick={handleMkLand}>下一步</Button>
      </div>
    </>
  );
}
