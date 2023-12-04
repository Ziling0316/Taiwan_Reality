import { City } from "@/component/city";
import { Logo } from "@/component/logo";
import { Town } from "@/component/town";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem
} from "@/components/ui/select";
import { identity, brand } from "../data/registerdata";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface Props {
  city: string;
}

export default function Official({ city }: Props) {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visible2, setVisible2] = React.useState<boolean>(false);
  let [value, setValue] = React.useState<string>("");
  
  //to do verify password and checkbox

  const [official, setOfficial] = React.useState(
    {
      "account": "",
      "assistant_id": "",
      "brand_id": "",
      "broker_id": "",
      "city_id": "",
      "company": "",
      "dist_id": "",
      "email": "",
      "first_name": "",
      "identity_id": "",
      "last_name": "",
      "member_type_id": "1",
      "password": "",
      "phone": "",
      "store": "",
      "street": ""
    });
    
    const handleRegister = async (e: any) => {
      e.preventDefault();
      try {
          console.log(JSON.stringify(official));
              const response = await fetch("http://localhost:5000/api/users/", {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(official),
              });
              const text = await response.text();
              if (response.status === 201) {
                  console.log('手機號碼已被使用!');
              } else if (response.status === 999) {
                  if (text.includes("account")) {
                      console.log('手機格式不符');
                  }
                  if (text.includes("password")) {
                      console.log('密碼過於簡單。請輸入至少8個字元');
                  }
                  if (text.includes("email")) {
                      console.log ('電子郵件格式不符');   
                  }
              } else if (response.status === 200) {
                  console.log("register successfully");
                  window.alert("註冊成功")
              }
      } catch (error) {
          console.log("error");
      }
    }
  return (
    <div className="flex w-screen justify-center items-center">
      <Card className="w-[400px]">
        <Logo />
        <CardContent>
          <Label className="flex w-full justify-center mb-2 text-xl">
            試用/正式會員註冊
          </Label>
          <hr></hr>
          <div className="flex flex-col space-y-1.5 mt-5">
            <Label>手機號碼</Label>
            <Input 
              id="phone" 
              placeholder="請輸入手機號碼" 
              value={official.account} 
              onChange={(e) =>  setOfficial({ ...official, 'account': e.target.value, 'phone': e.target.value })}
            />
          </div>
          <Button
            variant={"outline"}
            size="sm"
            className="rounded-lg relative left-[255px] -top-[38px]"
          >
            傳送驗證碼
          </Button>
          <div className="flex flex-col space-y-1.5">
            <Label>簡訊驗證碼</Label>
            <Input id="verify code" placeholder="請輸入簡訊驗證碼" />
          </div>
          <div className="flex flex-row space-x-1.5 mt-5">
            <div className="flex flex-col space-y-1.5">
              <Label>姓</Label>
              <Input 
                id="family name" 
                type="text" 
                placeholder="姓" 
                value={official.first_name} 
                onChange={(e) =>  setOfficial({ ...official, 'first_name': e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>名</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="名" 
                value={official.last_name} 
                onChange={(e) =>  setOfficial({ ...official, 'last_name': e.target.value})}  
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 mt-6">
            <Label>電子信箱</Label>
            <Input
              id="verify code"
              type="email"
              placeholder="請輸入電子信箱"
              value={official.email} 
              onChange={(e) =>  setOfficial({ ...official, 'email': e.target.value})}
            />
          </div>
          <div className="flex-col space-y-1.5 mt-6">
            <Label>請輸入密碼</Label>
            <Input
              type={visible ? "text" : "password"}
              id="password"
              placeholder="請輸入密碼"
              value={official.last_name} 
              onChange={(e) =>  setOfficial({ ...official, 'last_name': e.target.value})}
            />
            <FontAwesomeIcon
              icon={visible ? faEye : faEyeSlash}
              onClick={() => setVisible(!visible)}
              className="relative left-[320px] -top-[35px]"
            />
          </div>
          <div className="flex-col space-y-1.5">
            <Label>再次確認密碼</Label>
            <Input
              type={visible2 ? "text" : "password"}
              id="password"
              placeholder="請輸入密碼"
            />
            <FontAwesomeIcon
              icon={visible2 ? faEye : faEyeSlash}
              onClick={() => setVisible2(!visible2)}
              className="relative left-[320px] -top-[35px]"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex-col items-center space-y-1.5">
              <Label>縣市</Label>
              <Select onValueChange={(e) => {setValue((value = e)); setOfficial({ ...official, 'city_id': e});}}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="選擇居住縣市" />
                </SelectTrigger>
                <SelectContent>
                  <City />
                </SelectContent>
              </Select>
            </div>
            <div className="flex-col items-center space-y-1.5">
            <Label>鄉鎮市區</Label>
            <Select onValueChange={(e) => setOfficial({ ...official, 'city_id': e})}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="請選擇鄉鎮市區" />
                <SelectContent>
                  <Town city={official.city_id} />
                </SelectContent>
              </SelectTrigger>
            </Select>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 mt-6">
            <Label>地址(路段街巷號)</Label>
            <Input 
              id="address" 
              type="text" 
              placeholder="請輸入地址" 
              value={official.street} 
              onChange={(e) =>  setOfficial({ ...official, 'street': e.target.value})}
            />
          </div>
          <div className="flex-col items-center mt-3 space-y-1.5">
          <Label>身份</Label>
          <Select onValueChange={(e) => setOfficial({ ...official, 'identity_id': e})}>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="請輸入身份" />
              <SelectContent>
                {identity
                  ? identity.map((item) => (
                      <SelectItem value={item.value}>{item.option}</SelectItem>
                    ))
                  : null}
              </SelectContent>
            </SelectTrigger>
          </Select>
          </div>
          <div className="flex-col items-center mt-3 space-y-1.5">
          <Label>品牌</Label>
          <Select onValueChange={(e) => setOfficial({ ...official, 'brand_id': e})}>
            <SelectTrigger className="w-full ">
              <SelectValue placeholder="請輸入品牌" />
              <SelectContent>
                {brand
                    ? brand.map((item) => (
                        <SelectItem value={item.value}>{item.option}</SelectItem>
                      ))
                    : null}
              </SelectContent>
            </SelectTrigger>
          </Select>
          </div>
          <div className="flex flex-col space-y-1.5 mt-3">
              <Label>分店名</Label>
              <Input 
                id="store_name" 
                type="text" 
                placeholder="請輸入分店名"
                value={official.store} 
                onChange={(e) =>  setOfficial({ ...official, 'store': e.target.value})} 
              />
          </div>
          <div className="flex flex-col space-y-1.5 mt-3">
              <Label>公司名</Label>
              <Input 
                id="company_name" 
                type="text" 
                placeholder="請輸入公司名" 
                value={official.company} 
                onChange={(e) =>  setOfficial({ ...official, 'company': e.target.value})}
              />
          </div>
          <div className="flex flex-col space-y-1.5 mt-3">
              <Label>經紀人證號</Label>
              <Input 
              id="broker_number" 
              type="text" 
              placeholder="請輸入您的經紀人證號" 
              value={official.broker_id} 
              onChange={(e) =>  setOfficial({ ...official, 'broker_id': e.target.value})}
            />
          </div>
          <div className="flex flex-col space-y-1.5 mt-3">
              <Label>營業員證號</Label>
              <Input 
                id="salesperson_number" 
                  type="text" 
                  placeholder="請輸入您的營業員證號" 
                  value={official.assistant_id} 
                  onChange={(e) =>  setOfficial({ ...official, 'assistant_id': e.target.value})}
                />
          </div>
          <div className="space-x-2 flex items-center mb-2 mt-5">
            <Checkbox />
            <Label>
              同意<Link href="/terms">台灣房地網會員條款</Link>
            </Label>
          </div>
          <Button type="submit" variant={"outline"} className="w-full" onClick={handleRegister}>
            註冊帳號
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
