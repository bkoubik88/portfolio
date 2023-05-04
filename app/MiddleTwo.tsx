import Image from "next/image";
import React from "react";

export default function MiddleTwo() {
  return (
    <>
      <div className="col-span-2 relative  h-[300px] w-full   shadow-2xl ">
        <Image
          priority
          alt="share"
          fill
          src="/manTattoo.png"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="text-[#FF9F1C]  font-semibold text-lg md:text-4xl  p-3 absolute top-3 left-5  border-l-4 border-green-400">
          FindOne
        </h1>
      </div>
      <div className="relative h-[300px] w-full  shadow-2xl ">
        <Image
          priority
          alt="share"
          fill
          src="/shotsGirl.png"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="text-[#FF9F1C]  font-semibold text-lg md:text-4xl  p-3 absolute top-3 left-5  border-l-4 border-green-400">
          Shots
        </h1>
      </div>
      <div className="relative h-[300px] w-full  shadow-2xl ">
        <Image
          priority
          alt="share"
          fill
          src="/houses.png"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="text-[#FF9F1C]  font-semibold text-lg md:text-4xl  p-3 absolute top-3 left-5  border-l-4 border-green-400">
          LongLessTime
        </h1>
      </div>
    </>
  );
}
