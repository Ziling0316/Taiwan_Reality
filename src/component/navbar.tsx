import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { reminds, settings } from "../data/navbar_info";
import { GiFamilyHouse } from "react-icons/gi";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  BellIcon,
  CalendarDaysIcon,
  CrownIcon,
  HomeIcon,
  PiggyBankIcon,
  SettingsIcon,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 border-2 bg-white z-50">
        <div className="md:flex w-screen h-14 p-6 items-center justify-between">
          <div className="space-x-4 md:flex">
            <Link href="/">
              <div className="space-x-1 flex items-center">
                <GiFamilyHouse size={35} />
                <h1 className="serif text-2xl font-bold">
                  <span className="text-lime-600">台</span>
                  <span className="text-blue-400">灣</span>房
                  <span className="text-yellow-600">地</span>
                  <span className="text-red-500">網</span>
                </h1>
              </div>
            </Link>
            <div className="md:flex space-x-1">
              <Badge variant="outline" className="text-sm">
                <CrownIcon className="w-5 pr-1 " />
                一般會員 Level 0
              </Badge>
              <Badge variant="outline" className="text-sm pl-[20px] pr-[30px]">
                <PiggyBankIcon className="w-6 pr-1" />
                會員積分 0
              </Badge>
            </div>
          </div>
          <div className="md:flex items-center">
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <BellIcon className="pr-1" />
                    <h2>通知</h2>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid p-3 md:w-[400px] lg:grid-cols-[.75fr_1fr]">
                      {reminds.map((component) => (
                        // {<component.icon className="mr-1 w-5 h-5"/>}
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <SettingsIcon className="pr-1" />
                    <h2>系統設定</h2>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid p-3 md:w-[400px] lg:grid-cols-[.75fr_1fr]">
                      {settings.map((component) => (
                        // {<component.icon className="mr-1 w-5 h-5"/>}
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/" className="md:flex items-center mr-3 pl-2">
              <CalendarDaysIcon className="pr-1" />
              <p className="text-sm font-medium">我的行程</p>
            </Link>
            <Link href="/login">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback />
            </Avatar>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
