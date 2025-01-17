"use client";

import React from "react";
import { SignupFormDemo } from "@/components/Signup"; // Ensure the path is correct

const SignupPage = () => {
  return (
    <div className="w-full h-screen bg-[#011627] flex items-center justify-center px-4">
      <SignupFormDemo />
    </div>
  );
};

export default SignupPage;