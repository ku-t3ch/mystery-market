import Image from "next/image";

export default function Credits() {
  return (
    <div className="min-h-screen bg-[#FFF8DC] p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-gradient-to-tl from-[#FFF8DC] to-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold font-serif text-center text-[#5D3A1A] mb-6">
          MYSTERY MARKET
        </h2>
        <div className="flex justify-center">
          <img src="/mystery-market/assets/images/mystery-market-logo-resize.webp" width={150} height={150} alt="Mystery Market Logo" className="invert"/>
        </div>
        <h1 className="text-sm text-center text-[#8B4513] ">
          Developed by
        </h1>
        <div className="flex justify-center">
          <a href="https://tech.nisit.ku.ac.th/"><img src="/mystery-market/assets/images/KUTechBlack.png" width={150} height={150} alt="Kurechii Logo" /></a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col mt-10 w-full md:w-1/2 items-center">
            <div className="font-sans font-bold text-xl m-2 text-[#5D3A1A]">Project Manager</div>
            <div className="text-xs">
              <a href="https://www.instagram.com/prathongxx?igsh=MXJ6N2VldjA5MHBzaA==" className="hover:text-blue-500 text-[#5D3A1A]">
                Lullalil Jupanich
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-10 w-full md:w-1/2 items-center">
            <div className="font-sans text-xl font-bold m-2 text-[#5D3A1A]">Graphic Designer</div>
            <ul className="flex flex-col items-center text-xs">
              <li className="m-1">
                <a href="https://www.instagram.com/kxnpitcha_?igsh=ZHR0b3VrcmMybHI0" className="hover:text-blue-500 text-[#5D3A1A]">
                  Kanpitcha Chamaiklang
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pete_cringe?igsh=MXBjd2FwamNrMWQ1cA==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Theerapong Mungcharoen
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-10 w-full md:w-1/2 items-center">
            <div className="font-sans text-xl m-2 text-[#5D3A1A] font-bold">Story</div>
            <ul className="flex flex-col items-center text-xs">
              <li>
                <a href="https://www.instagram.com/lnafwak.yy?igsh=MXVnMHducmlpODlkdQ==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Jitlada Yotinta
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kiwiarekiwi?igsh=MXY2N2Z0Z3BuNG5icA==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Thananon Mahaphasukwat
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-10 w-full md:w-1/2 items-center">
            <div className="font-sans text-xl m-2 text-[#5D3A1A] font-bold">UX/UI</div>
            <ul className="flex flex-col items-center text-xs">
              <li>
                <a href="https://www.instagram.com/pete_cringe?igsh=MXBjd2FwamNrMWQ1cA==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Theerapong Mungcharoen
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/faithpanupong?igsh=MXRxdmR3ZGJhMHo0Mw==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Panupong Lertveeranontarat
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/karitthorn?igsh=bWhzdXZmOTltZm9k" className="hover:text-blue-500 text-[#5D3A1A]">
                  Karitthorn Bamrungpipattanporn
                </a>
              </li>
              
            </ul>
          </div>
          <div className="flex flex-col mt-10 w-full md:w-1/2 items-center">
            <div className="font-sans text-xl m-2 text-[#5D3A1A] font-bold">Front-end Developer</div>
            <ul className="flex flex-col items-center text-xs">
              <li className="m-1">
                <a href="https://www.instagram.com/jrw_pis?igsh=MXB3M3Y0NTRiYWtudA==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Jariyawat Pisin
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/weeranut.ck?igsh=ODM4azFncHh0Mngy" className="hover:text-blue-500 text-[#5D3A1A]">
                  Weeranut Chayakul
                </a>
              </li>
              <li className="mt-1">
                <a href="https://www.instagram.com/t4kani1_?igsh=anRvbjFlODhjOXBi" className="hover:text-blue-500 text-[#5D3A1A]">
                  Thanakirt Trakanjan
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prpswa_?igsh=MWVvNGhhY3o1YW56OQ==" className="hover:text-blue-500 text-[#5D3A1A]">
                  Phumrapee Soenvanichakul
                </a>
              </li>
              <li className="mt-1">
                <a href="https://www.instagram.com/teerut_1t" className="hover:text-blue-500 text-[#5D3A1A]">
                  Teerut Srithongdee
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-10 w-full md:w-1/2 items-center">
            <div className="font-sans text-xl m-2 text-[#5D3A1A] font-bold">Dev Ops</div>
            <ul className="flex flex-col items-center text-xs">
              <li>
                <a href="https://www.instagram.com/teerut_1t" className="hover:text-blue-500 text-[#5D3A1A]">
                  Teerut Srithongdee
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <a href="#">
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded-full">
                Back
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}