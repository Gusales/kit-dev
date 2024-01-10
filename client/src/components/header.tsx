import Image from "next/image";
import Logo from "@/assets/IconKitDev.svg"

import { Switch } from "./ui/switch";
import { FaUserCircle } from "react-icons/fa";

export function Header() {
  return (
    <header className="h-24 flex justify-around items-center font-semibold text-zinc-100">
        <div className='flex'>
          <Image src={Logo} alt='Logo from Kit Dev' width={30}/>
          <h2 className='text-4xl ml-2'>KIT DEV</h2>
        </div>
        <div className='flex w-1/3 justify-evenly items-center'>
          <label className='flex gap-2'>
            Br
            <Switch />
            En
          </label>
          <div className='flex gap-3'>
            <h3>About</h3>
            <h3>Projects</h3>
            <h3>Contact</h3>
          </div>
          <div className='flex items-center'>
            <FaUserCircle size={'2rem'}/>
          </div>
        </div>
      </header>
  )
}