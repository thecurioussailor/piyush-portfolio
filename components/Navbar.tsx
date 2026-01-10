"use client";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center justify-center w-full max-w-[704px]">
        <header className="flex flex-col items-center justify-center w-full">
          <div className="relative border-10 border-b-0 border-black bg-white px-[40px] py-[50px] w-full flex flex-row items-center justify-between">
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute -top-[10px] -left-[10px]"></div>
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute -top-[10px] -right-[10px]"></div>
            <a className="flex flex-row items-center gap-[30px] w-full">
              <div className="rounded-full overflow-hidden border-2 border-black w-[100px] h-[100px]">
                <Image src="/images/billa2.png" alt="logo" width={100} height={100} className="object-cover object-center" />
              </div>
              <div>
                <div>
                  <p className="text-[34px] text-black">Piyush</p>
                </div>
                <div>
                  <p className="text-[16px] text-black">Junior Scientist</p>
                </div>
              </div>
            </a>
            <div 
              className="flex flex-col relative w-10 h-10 gap-2 cursor-pointer z-10 overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div 
                className="h-[2px] w-[32px] bg-black" 
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 10 : 0,
                }}
                transition={{duration: 0.3, ease: "easeInOut"}}
              />
              <motion.div 
                className="h-[3px] w-[32px] bg-black" 
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scale: isOpen ? 0.5 : 1,
                }}
                transition={{duration: 0.2, ease: "easeInOut"}}
              />
              <motion.div 
                className="h-[2px] w-[32px] bg-black" 
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -10 : 0,
                }}
                transition={{duration: 0.3, ease: "easeInOut"}}
              />
            </div>
            <nav className="absolute top-44">
                sakjskfh
            </nav>
          </div>
          <div className="relative border-x-10 border-[#e7e8d3] px-[40px] py-[6px] w-full bg-black flex items-center justify-between">
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute bottom-[10px] left-0"></div>
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute bottom-0 left-[10px]"></div>
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute bottom-[10px] right-[10px]"></div>
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute bottom-0 right-0"></div>
            <div className="flex items-center gap-2">
              <div className="bg-[#05FF50] w-[10px] h-[10px] rounded-full"></div>
              <div>
                <p>Available for work</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="cursor-pointer w-10 h-10 flex items-center justify-center">
                <FaXTwitter className="text-white text-xl" />
              </div>
              <div className="cursor-pointer w-10 h-10 flex items-center justify-center">
                <FaLinkedinIn className="text-white text-xl" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}