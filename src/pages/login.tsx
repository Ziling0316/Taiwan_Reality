import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "@/component/logo";
import { useRouter } from "next/router";
import * as React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

let token: any;
export { token };

export default function Login() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [member, setMember] = React.useState<string>("");
  const router = useRouter();

  const [loginTb, setLoginTb] = React.useState(
    {
        'account'  : "",       
        'password' : "",              
    }
  );

  const HandleClick = (event: any) => {
    event.preventDefault();
    if (member === "general member") {
      router.push("/general");
    } else if (member === "official member") {
      router.push("/official");
    }
    console.log(document.getElementById("general member"));
  };
  //login api
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
        // console.log(JSON.stringify(loginTb));
        const response = await fetch("http://localhost:5000/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginTb),
        });
        
        if (response.status === 200) {
          console.log('login successfully.');
        } else if (response.status === 801) {
          console.log('密碼錯誤')
        } else if (response.status === 802) {
          console.log('無此帳號')
        } else{
          console.log('fail');
        }
        const responseData = await response.json(); 
        console.log(responseData.access_token);
        token = responseData.access_token;
        
        
    } catch (error) {
        console.log('error');
    }
}



  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-[400px]">
        <Logo />
        <CardContent>
          <form>
            <Label htmlFor="login" className="text-xl flex justify-center w-full">
              登入帳號
            </Label>
            <div className="grid items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>手機號碼</Label>
                <Input id="phone" placeholder="請輸入手機號碼" value={loginTb.account} onChange={(e) =>  setLoginTb({ ...loginTb, 'account': e.target.value })}/>
              </div>
              <div className="flex-col space-y-1.5">
                <Label>密碼</Label>

                <Input
                  type={visible ? "text" : "password"}
                  id="password"
                  placeholder="請輸入密碼"
                  value={loginTb.password} 
                  onChange={(e) =>  setLoginTb({ ...loginTb, 'password': e.target.value })}
                />
                <FontAwesomeIcon
                  icon={visible ? faEye : faEyeSlash}
                  onClick={() => setVisible(!visible)}
                  className="relative left-[320px] -top-[35px]"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <div className="space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-medium">
                    記住帳號
                  </Label>
                </div>
                <Label htmlFor="forget password">忘記密碼？</Label>
              </div>
              <div className="flex justify-between">
                <Button className="bg-cyan-600 hover:bg-cyan-600">
                  <AiFillFacebook />
                  Facebook登入
                </Button>
                <Button className="bg-emerald-800 hover:bg-emerald-800">
                  <FcGoogle />
                  Google登入
                </Button>
              </div>
              <hr></hr>
              <Label htmlFor="login" className="flex justify-center w-full">
                註冊帳號
              </Label>
              <div className="flex flex-col space-y-3">
                <Label htmlFor="member_type">請選擇註冊會員類型</Label>
                <Select onValueChange={(e) => setMember(e)}>
                  <SelectTrigger id="member_type">
                    <SelectValue placeholder="會員類型" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="general member">加入一般會員</SelectItem>
                    <SelectItem value="official member">
                      加入試用/正式會員
                    </SelectItem>
                  </SelectContent>
                  <Button
                    type="submit"
                    className="pt-2"
                    onClick={(e) => HandleClick(e)}
                  >
                    開始註冊
                  </Button>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="w-[100px]" onClick={handleLogin}>
            登入
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
