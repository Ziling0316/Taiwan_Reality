import { Inter } from "next/font/google";
import * as React from "react";
import Link from "next/link";

import { Navbar } from "@/component/navbar";
import { Advertise } from "@/component/advertise";
import { Webbuttons } from "@/component/web_buttons";
import { House } from "@/component/houserecom";
import { News } from "@/component/news";
import {Contact} from "@/component/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Advertise /> 
      <Navbar />
      <Webbuttons />
      <House />
      <News/>
      <Contact/>

    </>
  );
}
