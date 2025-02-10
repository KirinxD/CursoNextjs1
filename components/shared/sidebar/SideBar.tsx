"use server"
import Image from "next/image";
import { SideBarItem } from "./sideBarItem";
import { Calculator, Heart, Home, Triangle } from "lucide-react";
import { JSX } from "react";

interface menuItemsInterface {
  path: string;
  text: string;
  icon: JSX.Element;
  subTitle: string;
}
const menuItems:menuItemsInterface[] = [
  { path: "/dashboard/main", text: "Main",icon:<Home width={30} height={30}/>, subTitle:"Home page"},
  { path: "/dashboard/counter", text: "Counter",icon:<Calculator width={30} height={30}/>, subTitle:"Counter page" },
  { path: "/dashboard/pokemons", text: "Pokemon",icon:<Triangle width={30} height={30}/>, subTitle:"Counter page" },
  { path: "/dashboard/favorite", text: "Favorites",icon:<Heart width={30} height={30}/>, subTitle:"Favorite pokemon" },
];

const SideBar = () => {
  return (
    
    <div
      id="menu"
      className="bg-gray-800 min-h-screen h-full z-10 text-slate-300 w-56 left-0 overflow-y-hidden "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={60}
              height={60}
              className="rounded-full w-8 h-8"
              src="/spiderUser.jpg"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Adrián Alfonso</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item, index) => (
          <SideBarItem
            key={index}
            path={item.path}
            text={item.text}
            icon={item.icon}
            subTitle={item.subTitle}
          />))}
      </div>
    </div>
  );
};

export default SideBar;
