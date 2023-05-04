import Top from "./Top";
import Middle from "./Middle";
import Timeline from "./Timeline";
import Karte from "./Karte";
import Link from "next/link";
import MiddleTwo from "./MiddleTwo";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:flex sm:grid-cols-2 text-center items-center ">
        <Top></Top>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 ">
        <Middle></Middle>
      </div>
      <div className="grid col-cols-3 gap-2 mt-15">
        <MiddleTwo></MiddleTwo>
      </div>
      <div>
        <p className="max-w-7xl mx-auto p-8  underline font-bold text-4xl ml-2  font-mono">
          Lebenslauf
        </p>
      </div>
      <div className="lg:grid lg:grid-flow-col lg:auto-cols-max lg:gap-6 flex flex-grow justify-center items-center mx-auto max-w-7xl  grid-flow-col ">
        <Timeline></Timeline>
      </div>
      <div className="flex flex-col flex-grow justify-center mt-20 mb-20">
        <span className="max-w-7xl mx-auto p-8  underline font-bold text-4xl ml-2  font-mono">
          <h1>Wohnort</h1>
        </span>
        <Karte></Karte>
      </div>
      <div className="text-center ">
        <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></hr>
        <Link href="mailto:benjamin.koubik@gmx.de">
          <button
            type="button"
            className="hover:text-black mb-10 px-9 py-8 md:px-12 md:py-6 outline-none hover:outline-none shadow-lg   rounded-full bg-[#1d1b1c] hover:bg-gradient-to-r hover:from-middle-green hover:to-regal-green  text-white font-bold hover:scale-110 transition-all duration-200"
          >
            Kontaktieren
          </button>
        </Link>
      </div>
    </>
  );
}
