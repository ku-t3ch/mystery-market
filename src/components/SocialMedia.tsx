import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center gap-1 font-thin text-xs text-secondary-white">
        <div className="flex flex-row justify-center w-full gap-4">
          <Link
            href="https://www.instagram.com/ku.t3ch/"
            className="flex flex-col flex-center items-center hover:cursor-pointer"
          >
            <Icon icon="bi:instagram" width={28} height={28} />
            <div className="pt-2">ku.t3ch</div>
          </Link>
          <Link
            href="https://www.facebook.com/ku.t3ch"
            className="flex flex-col flex-center items-center hover:cursor-pointer"
          >
            <Icon icon="bi:facebook" width={28} height={28} />
            <div className="pt-2">KU Tech</div>
          </Link>
        </div>
        <Link
          href="https://tech.nisit.ku.ac.th/mystery-market"
          className="flex flex-row justify-center items-center gap-1"
        >
          <Icon icon="tabler:external-link" width={16} height={16} />
          <div>tech.nisit.ku.ac.th/mystery-market</div>
        </Link>
      </div>
    </>
  );
}
