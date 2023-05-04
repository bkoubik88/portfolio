"use client";
import { Tooltip } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

export default function Top() {
  return (
    <>
      <div className="md:w-3/4 p-4 bg-gradient-to-b   from-[#9055A2] text-center  md:bg-gradient-to-b ">
        <div className="text-xl sm:text-lg md:text-2xl lg:text-4xl  font-bold  mt-8 text-white">
          <h1>
            <p>Hi, ich bin Benjamin Koubik,</p>
            <span>
              {" "}
              Softwareentwickler seit mehr als{" "}
              <p className="font-bold text-6xl ">7</p> Jahren
            </span>
            <div className="text-violet-400 font-mono mt-5">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("React.JS")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("TailwindCSS")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("NodeJS")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Express")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Firebase")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Material Design")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Next.JS")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("MongoDB")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
          </h1>
        </div>
        <p className="text-lg text-gray-200 font-thin mt-6">
          Mein erstes Buch war über JAVA. Seitdem bin ich begeisterter
          Programmierer
        </p>
        <div>
          <Link href="mailto:benjamin.koubik@gmx.de">
            <button
              type="button"
              className="hover:text-black mt-10 px-9 py-8 md:px-12 md:py-6 outline-none hover:outline-none shadow-lg  mb-2 rounded-full bg-[#1d1b1c] hover:bg-gradient-to-r hover:from-middle-green hover:to-regal-green  text-white font-bold hover:scale-110 transition-all duration-200"
            >
              Kontaktieren
            </button>
          </Link>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></hr>

          <div className="flex justify-center mt-3 text-white">
            <Tooltip title="Facebook">
              <Link href="https://www.facebook.com/bkoubik/" target="_blank">
                <Image
                  className="mx-4 hover:animate-bounce  cursor-pointer bg-white rounded-md"
                  src="/facebook.png"
                  alt="linkedIn"
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </Tooltip>
            <Tooltip title="Instagram">
              <Link
                href="https://www.instagram.com/btocall/?igshid=ZDdkNTZiNTM%3D"
                target="_blank"
              >
                <Image
                  className="mx-4 hover:animate-bounce cursor-pointer bg-white rounded-md"
                  src="/instagramN.png"
                  alt="linkedIn"
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/benjamin-koubik-unenu/"
                target="_blank"
              >
                <Image
                  className="mx-4  hover:animate-bounce cursor-pointer bg-white rounded-md"
                  src="/linkedIn.png"
                  alt="linkedIn"
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </Tooltip>
          </div>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></hr>
        </div>
      </div>
      <div className="flex-grow -mt-10 mb-10 relative h-[400px]  sm:h-[460px] sm:w-[300px] md:h-[450px] md:w-[400px]  ml-4 ">
        <Image
          priority
          className="rounded-l-full border-2"
          src={"/ich.jpg"}
          alt="Benjamin Koubik"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
    </>
  );
}
