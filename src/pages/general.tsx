import { Logo } from "@/component/logo";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
export default function General() {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [visible2, setVisible2] = React.useState<boolean>(false);

    const [general, setGeneral] = React.useState(
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
            console.log(JSON.stringify(general));
                const response = await fetch("http://localhost:5000/api/users/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(general),
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
  <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-[400px]">
        <Logo/>
        <CardContent>
          <Label className="flex w-full justify-center mb-2 text-xl">
            一般會員註冊
          </Label>
          <hr></hr>
          <div className="flex flex-col space-y-1.5 mt-5">
            <Label>手機號碼</Label>
            <Input 
              id="phone" 
              placeholder="請輸入手機號碼" 
              value={general.account} 
              onChange={(e) =>  setGeneral({ ...general, 'account': e.target.value, 'phone': e.target.value })}
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
                value={general.first_name} 
                onChange={(e) =>  setGeneral({ ...general, 'first_name': e.target.value })}  
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>名</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="名" 
                value={general.last_name} 
                onChange={(e) =>  setGeneral({ ...general, 'last_name': e.target.value })}  
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 mt-6">
            <Label>電子信箱</Label>
            <Input 
              id="verify code" 
              type="email" 
              placeholder="請輸入電子信箱" 
              value={general.email} 
              onChange={(e) =>  setGeneral({ ...general, 'email': e.target.value })}
            />
          </div>
          <div className="flex-col space-y-1.5 mt-6">
                <Label>請輸入密碼</Label>
                <Input
                  type={visible ? "text" : "password"}
                  id="password"
                  placeholder="請輸入密碼"
                  value={general.password} 
                  onChange={(e) =>  setGeneral({ ...general, 'password': e.target.value })}
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
              <div className="space-x-2 flex items-center mb-2">
              <Checkbox/>
              <Label>同意<Link href="/terms">台灣房地網會員條款</Link></Label>
              </div>
              <Button 
                type="submit" 
                variant={"outline"} 
                className="w-full"
                onClick={handleRegister}
              >註冊帳號</Button>
        </CardContent>
      </Card>
    </div>
  );
}