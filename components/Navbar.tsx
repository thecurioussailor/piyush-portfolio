import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center justify-center w-full max-w-[704px]">
        <header className="flex flex-col items-center justify-center w-full">
          <div className="relative border-10 border-b-0 border-black px-[40px] py-[50px] w-full flex flex-row items-center justify-between">
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute -top-[10px] -left-[10px]"></div>
            <div className="w-[10px] h-[10px] bg-[#e7e8d3] absolute -top-[10px] -right-[10px]"></div>
            <a className="flex flex-row items-center gap-[30px] w-full">
              <div className="rounded-full overflow-hidden border-2 border-black w-[100px] h-[100px]">
                <Image src="/images/billa.png" alt="logo" width={100} height={100} className="object-cover object-center" />
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
            <div>menu icon</div>
          </div>
          <div className="border-x-10 border-[#e7e8d3] px-[40px] py-[6px] w-full bg-black flex items-center justify-between">
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