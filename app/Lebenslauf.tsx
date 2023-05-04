"use client";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function Lebenslauf() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://ipapi.co/json/");
      const result = await data.json();

      setUser(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storeUser = async () => {
      try {
        await axios.post("/api/new", { user }).then((res) => {
          console.log(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (Object.keys(user).length !== 0) {
      storeUser();
    }
  }, [user]);

  const downloadPDF = () => {
    getDownloadURL(ref(storage, "CV.pdf"))
      .then((url) => {
        window.open(url, "_blank");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={downloadPDF}
      type="button"
      className="border-2 py-4 px-4 lg:px-8 rounded-full hover:bg-white hover:text-black flex items-center mx-3"
    >
      <ArchiveBoxArrowDownIcon className="h-10 animate-bounce"></ArchiveBoxArrowDownIcon>
      <span className="ml-2">Lebenslauf herunterladen</span>
    </button>
  );
}
