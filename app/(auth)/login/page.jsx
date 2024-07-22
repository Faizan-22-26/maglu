"use client";
import { useSearchParams } from "next/navigation";
import Login from "./components/login";
import React, { useEffect, useState } from "react";
import "./style.css";
import Switch from "./components/switch";
import Register from "./components/register";
import CanvasAnimation from "./components/Canvas"; // Import the CanvasAnimation component
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

function LoginReg() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const [ischecked, setIschecked] = useState(false);
  const [register, setRegister] = useQueryState("register");
  const [registerParam, setRegisterParam] = useState(
    searchParams.get("register")
  );

  useEffect(() => {
    const queryParams = searchParams.get("register");
    if (queryParams == "true") {
      setIschecked(true);
    } else {
      setIschecked(false);
    }
    console.log(queryParams);
  }, []);

  const handleInputChange = (event) => {
    if (event.target.checked) {
      setRegisterParam("true");
      setRegister(true);
      setIschecked(true);
      console.log("Input checkbox is checked");
    } else {
      setRegister(null);
      setRegisterParam(null);
      setIschecked(false);
      console.log("Input checkbox is not checked");
    }
  };
  return (
    <div className="flex flex-row">
      <div
        className={`sm:flex w-full h-screen hidden bg-[#252837] pattern-triangles-gray-500/40 ${
          ischecked ? "text-white" : "text-blue-700"
        }`}
      >
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <CanvasAnimation />
          <div className="absolute">
            <h1 className="text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 pl-24 text-8xl font-bold">
              Welcome to CampusTutor
            </h1>
            <p className="py-20 px-44 text-center text-white text-2xl">
              As Promised we present you with: CampusTutor is an educational
              website designed for college students, offering comprehensive
              resources including interactive tutorials, course materials, and
              study guides across various subjects. It provides practice exams
              and personalized learning plans to support academic success. With
              its user-friendly interface, CampusTutor aims to make learning
              accessible and efficient for all college students.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-2/5 h-screen bg-[#333645] shadow-lg shadow-white">
        <div className="flex flex-col items-center justify-center h-full p-10">
          <div className="flex flex-row justify-between w-full items-center p-1 px-4">
            <h1
              className={`text-xl pr-2 ${
                ischecked ? "text-white" : "text-blue-700"
              }`}
            >
              Login
            </h1>
            <Switch handleInputChange={handleInputChange} check={ischecked} />
            <h1
              className={`text-xl pl-2 ${
                ischecked ? "text-blue-700" : "text-white"
              }`}
            >
              Register
            </h1>
          </div>
          {ischecked ? <Register /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default LoginReg;
