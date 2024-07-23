import Link from "next/link";
import Image from "next/image";
import KuTechLogo from "@/../../public/assets/images/KUTechBlack.png";

export default function NavBarResult() {
  return (
    <>
      <nav className="">
        <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="h-[76] w-">
              <Image
                src={KuTechLogo}
                className=""
                alt="KuTech Logo"
                width={76}
                height={76}
              />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
