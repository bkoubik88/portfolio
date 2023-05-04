"use client";

import * as React from "react";
import type {} from "@mui/lab/themeAugmentation";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Lebenslauf from "./Lebenslauf";

export default function OutlinedTimeline() {
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2005
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-gray-900" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-start items-center">
              <img
                loading="lazy"
                src="/oss.png"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">Realschule OSS</p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2007
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-cyan-400" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-end items-center">
              <img
                loading="lazy"
                src="/stadt.png"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">
                Verwaltungsfachangestellter
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2009
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-violet-500" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-start items-center">
              <img
                loading="lazy"
                src="/gds.png"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">Fachhochschule</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2012
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-pink-700" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-end items-center">
              <img
                loading="lazy"
                src="/kolping.png"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">Grafik-Designer</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-red-500" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-start items-center">
              <img
                loading="lazy"
                src="https://www.studihub.de/wp-content/uploads/2021/03/IUBH-neuer-Name-IU-neues-Logo-IU-Internationale-Hochschule.jpg"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">
                IUBH (International University of Applied Sciences)
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2017
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-green-500" />{" "}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-end items-center">
              <img
                loading="lazy"
                src="/auditweb.png"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">auditweb Solutions GmbH</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-orange-400" />{" "}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-start items-center">
              <img
                loading="lazy"
                src="/daimler.png"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:ml-5 md:flex">Daimler AG, Sindelfingen</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="text-white">
            heute
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" className="border-gray-900" />
            <TimelineConnector className="rounded-full" />
          </TimelineSeparator>
          <TimelineContent className="text-lg">
            <div className="flex justify-end items-center">
              <img
                loading="lazy"
                src="/UNENU.jpg"
                width={100}
                style={{ objectFit: "contain" }}
              ></img>
              <p className="hidden md:flex ml-4">Selbstständig/ Freelancer</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="mt-4">
          <TimelineOppositeContent className="text-white"></TimelineOppositeContent>

          <TimelineContent className="text-lg relative">
            <div className="flex justify-end items-center absolute -left-7 -top-6">
              <Lebenslauf></Lebenslauf>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className=" justify-center  hidden lg:flex">
        <Image
          src="/transparent.png"
          width={400}
          height={400}
          alt="CV"
          className="border-none"
        ></Image>
      </div>
    </>
  );
}
