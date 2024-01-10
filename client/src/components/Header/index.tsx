"use client";
import Image from "next/image";
import Logo from "@/assets/IconKitDev.svg";
import { FaUserCircle } from "react-icons/fa";
import { ptBr, enUs } from "@/languages/languages.json";
import { Switch } from "@/components/ui/switch";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [language, setLanguage] = useState(ptBr);

  function handleChangeLang() {
    if (language == ptBr) return setLanguage(enUs);
    else return setLanguage(ptBr);
  }

  function itensMenu(props: string) {
    return (
      <>
        <a href="#" className={props}>
          {language.header.about}
        </a>
        <a href="#" className={props}>
          {language.header.projects}
        </a>
        <a href="#" className={props}>
          {language.header.contacts}
        </a>
      </>
    );
  }

  function switchLang() {
    return (
      <label className="flex items-center gap-2 text-sm">
        PT-BR <Switch onClick={handleChangeLang} /> EN
      </label>
    );
  }

  function menuSm() {
    return (
      <Sheet>
        <SheetTrigger className="mr-5"><RxHamburgerMenu size={"2rem"} /></SheetTrigger>
        <SheetContent
          className="bg-zinc-950 border-0"
          side={"right"}
        >
          <SheetHeader className="flex items-center gap-2">
            <SheetTitle className="text-zinc-50 p-4 font-bold text-2xl">
              {switchLang()}
            </SheetTitle>
            <div className="text-zinc-300">
          <FaUserCircle size={"5rem"} />
        </div>
            <SheetDescription className="flex gap-6">
              {itensMenu(
                "text-zinc-300 border-b-2 border-transparent hover:border-b-2 hover:border-zinc-100 flex w-1/3 justify-center")}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <header className="h-24 flex justify-between lg:justify-evenly items-center font-semibold text-zinc-100">
      <div className="flex ml-5">
        <Image src={Logo} alt="Logo from Kit Dev" width={30} />
        <h2 className="text-4xl ml-2">KIT DEV</h2>
      </div>

      <div className="md:hidden">{menuSm()}</div>

      <div className="w-1/2 h-full hidden md:flex justify-evenly items-center">
        {switchLang()}
        {itensMenu("border-b-2 border-transparent hover:border-b-2 hover:border-zinc-100")}
        <div className="flex items-center">
          <FaUserCircle size={"2rem"} />
        </div>
      </div>
    </header>
  );
}
