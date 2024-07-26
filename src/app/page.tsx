"use client";

import dynamic from "next/dynamic";

const StoryLoad = dynamic(() => import("../components/StoryLoad"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-[calc(100dvh)] text-primary-white bg-black">
      <StoryLoad />
    </div>
  );
}
