import React from "react";
import Image from "next/image";
import { Smartphone } from "react-feather";

function Avatar() {
  return (
    <div className="items-start rounded-l-2xl relative">
      {/* <div className="flex pl-4 flex-1 items-center w-24 h-24 rounded-full bg-gradient-to-r from-humpack to-fox absolute -left-12">
        <Smartphone />
      </div> */}
      <div className="z-40 relative w-56 h-56">
        <Image src="/me_avatar.png" alt="Picture avatar" fill className="rounded-full" />
      </div>
    </div>
  );
}

export default Avatar;
