import Link from "next/link"
import Image from "next/image"
import KuTechLogo from "@/../../public/assets/images/KUTechBlack.png";

export default function NavBarResult(){
    return(<>
    
    <nav className="border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={KuTechLogo} className="h-[76]" alt="Flowbite Logo" width={76} />
          </Link>
        </div>
      </nav>
    </>)
}