"use client";
import Image from "next/image";
import React, {
  useState,
  useRef,
  Fragment,
  useEffect,
  useCallback,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const share = {
  title: "Share",
  description:
    "MERN Applikation - Tausche, Verschenke oder biete deine Dienstleistungen an. " +
    "Alles auf einer Plattform. Lass dir auf einer Map anzeigen wo sich Artikel/Veranstaltungen befinden,chatte mit dem  Anbieter oder sage direkt bei Veranstaltungen zu. Einfach – oder ;)?! ReactJS,Express,MongoDB,Firebase,Express,NodeJS,Redux,Java,SpringBoot",
};

const kalender = {
  title: "Remind Me",
  description:
    "Kalender Webapplikation. Trage für dich oder jemand anderen oder für beide gleichzeitig Termine ein. Markiere wichtige Ereignisse extra und bekomme Erinnerung, wenn ein Geburtstag ansteht. Trage Schicht-Dienste (Früh, Spät, Nacht, Frei) ein und blende bei Bedarf andere Personen aus, sodass du mehr Übersicht hast. Easy ;)",
};

const places = {
  title: "Nice Places",
  description:
    "Native App für Android. Zeige anderen auf Google-Maps, wo du dich befindest, oder teile Aufnahmen mit anderen. Bekomme instant Push Benachrichtigungen, sobald jemand ein neues Bild hinzufügt. Da keine Bilder aus der Galerie eingefügt werden können, weißt du Just-in-time wo, wer, was aufgenommen hat. Cool, oder ?!:)",
};

export default function Middle() {
  const [open, setOpen] = useState(false);
  const [whichOne, setWhichOne] = useState(0);

  const [image, setImage] = useState<String | null>(null);

  const handleClick = (img: String, which: number) => {
    setWhichOne(which);
    setImage(img);
  };

  useEffect(() => {
    const openDialog = () => {
      setOpen(true);
    };

    image && openDialog();
  }, [image]);

  const cancelButtonRef = useRef(null);

  const closeDialog = useCallback(() => {
    setImage("");
    setOpen(false);
  }, []);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={closeDialog}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-scroll">
            <div className="flex min-h-full  justify-center  text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative h-[800px] w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  {image && (
                    <Image
                      priority
                      src={image!! as string}
                      alt="new"
                      fill
                      style={{ objectFit: "cover" }}
                    ></Image>
                  )}

                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 absolute bottom-0 ">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                        <InformationCircleIcon
                          className="h-8 w-6 text-cyan-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left mx-4  ">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          {whichOne === 1
                            ? share.title
                            : whichOne === 2
                            ? kalender.title
                            : places.title}
                        </Dialog.Title>
                        <div className="mt-2 ">
                          <p className="text-sm text-gray-500 break-all">
                            {whichOne === 1
                              ? share.description
                              : whichOne === 2
                              ? kalender.description
                              : places.description}
                          </p>
                          <div className="text-center">
                            <button
                              type="button"
                              className="p-4 bg-blue-200 rounded-full mt-5 hover:scale-110 transition-all duration-200"
                              onClick={closeDialog}
                              ref={cancelButtonRef}
                            >
                              Coole Sache
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="relative h-[500px] w-full rotate-3 shadow-2xl z-50">
        <Image
          priority
          className=" blur-[2px] hover:blur-none"
          alt="share"
          fill
          src="/new.png"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="text-[#FF9F1C]  font-semibold text-lg md:text-4xl  p-3 absolute top-3 left-5  border-l-4 border-green-400">
          Share App
        </h1>
        <div className="absolute bottom-4 w-full items-center text-center ">
          <button
            type="button"
            onClick={() => handleClick("/new.png", 1)}
            className="py-6 px-3 md:px-8 rounded-full  bg-regal-green font-bold hover:scale-110 transition-all duration-200 text-black"
          >
            mehr davon
          </button>
        </div>
      </div>

      <div className="relative h-[500px] w-full -rotate-6 shadow-2xl z-50">
        <Image
          priority
          className="blur-[2px] hover:blur-none"
          alt="share"
          fill
          src="/girlWithMobilePhone.png"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="text-[#FF9F1C]  font-semibold text-lg md:text-4xl  p-3 absolute top-3 left-5  border-l-4 border-green-400 ">
          Remind Me
        </h1>
        <div className="absolute bottom-4 w-full items-center text-center ">
          <button
            type="button"
            onClick={() => handleClick("/girlWithMobilePhone.png", 2)}
            className="py-6 px-3 md:px-8 rounded-full  bg-regal-green font-bold hover:scale-110 transition-all duration-200 text-black"
          >
            mehr davon
          </button>
        </div>
      </div>
      <div className="relative h-[500px] w-full  rotate-6 shadow-2xl z-50">
        <Image
          priority
          className="blur-[2px] hover:blur-none "
          alt="share"
          fill
          src="/man.png"
          style={{
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="text-[#FF9F1C]  font-semibold text-lg md:text-4xl  p-3 absolute top-3 left-5  border-l-4 border-green-400 ">
          NicePlaces
        </h1>
        <div className="absolute bottom-4 w-full items-center text-center ">
          <button
            type="button"
            onClick={() => handleClick("/man.png", 3)}
            className="py-6 px-3 md:px-8 rounded-full  bg-regal-green font-bold hover:scale-110 transition-all duration-200 text-black "
          >
            mehr davon
          </button>
        </div>
      </div>
    </>
  );
}
