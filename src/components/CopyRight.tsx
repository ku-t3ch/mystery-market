import React from "react";

const CopyRight = React.memo(({ currentScene }: { currentScene: number }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center h-auto w-full gap-2 ${
          currentScene == 0 ? "hidden" : ""
        }`}
      >
        <div className={`text-xs text-secondary-white `}>
          Copyright 2024 © Technology Club of Kasetsart University
        </div>
      </div>
    </>
  );
});

// Add display name for debugging purposes
CopyRight.displayName = "CopyRight";

export default CopyRight;
