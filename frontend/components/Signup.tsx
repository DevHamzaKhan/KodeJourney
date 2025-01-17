"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#011627]">
      <h2 className="font-bold text-xl text-[#89CFF0]">Welcome to Aceternity</h2>
      <p className="text-[#89CFF0] text-sm max-w-sm mt-2">
        Login to Aceternity if you can because we don&apos;t have a login flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-[#89CFF0]">
              First name
            </Label>
            <Input id="firstname" placeholder="Tyler" type="text" className="text-[#011627] bg-[#89CFF0]" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-[#89CFF0]">
              Last name
            </Label>
            <Input id="lastname" placeholder="Durden" type="text" className="text-[#011627] bg-[#89CFF0]" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-[#89CFF0]">
            Email Address
          </Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" className="text-[#011627] bg-[#89CFF0]" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-[#89CFF0]">
            Password
          </Label>
          <Input id="password" placeholder="••••••••" type="password" className="text-[#011627] bg-[#89CFF0]" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword" className="text-[#89CFF0]">
            Your twitter password
          </Label>
          <Input id="twitterpassword" placeholder="••••••••" type="password" className="text-[#011627] bg-[#89CFF0]" />
        </LabelInputContainer>

        <button
          className="bg-[#89CFF0] text-[#011627] w-full rounded-md h-10 font-medium shadow-md"
          type="submit"
        >
          Sign up &rarr;
        </button>

        <div className="bg-gradient-to-r from-transparent via-[#89CFF0] to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="flex space-x-2 items-center justify-start px-4 w-full text-[#011627] rounded-md h-10 font-medium shadow-md bg-[#89CFF0]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-[#011627]" />
            <span>GitHub</span>
          </button>
          <button
            className="flex space-x-2 items-center justify-start px-4 w-full text-[#011627] rounded-md h-10 font-medium shadow-md bg-[#89CFF0]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-[#011627]" />
            <span>Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};