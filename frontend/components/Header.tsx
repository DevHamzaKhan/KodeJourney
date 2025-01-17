"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [user, setUser] = useState<any>({
    displayName: "Hamza",
    email: "hamza@gmail.com",
    photoURL: "/random-icon.png", // Default icon
  });
  const [userName, setUserName] = useState<string>(user.displayName);

  // Handle sign out
  const handleSignOut = () => {
    setUser(null); // Reset user state after sign out
  };

  return (
    <header className="bg-[#011627] p-4 shadow-lg border-b-2 border-[#89CFF0]">
<div className="container mx-auto flex justify-between items-center" style={{ paddingLeft: '2px' }}>
            <div className="flex items-center space-x-4">
          <svg
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="#89CFF0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="#89CFF0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="#89CFF0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-[#89CFF0] text-2xl font-bold">KodeJourney</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {!user ? (
              <>
                <li>
                  <Link href="/signup" passHref>
                    <Button
                      variant="outline"
                      className="bg-[#011627] text-[#011627] border border-[#89CFF0] hover:bg-[#011627]/90 hover:text-[#89CFF0] transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/login" passHref>
                    <Button
                      variant="outline"
                      className="bg-[#011627] text-[#011627] border border-[#89CFF0] hover:bg-[#011627]/90 hover:text-[#89CFF0] transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      Log In
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#89CFF0] text-[#011627] flex items-center justify-center">
                    {userName[0]} {/* Display first letter of name */}
                  </div>
                  <span className="text-[#89CFF0]">{userName}</span> {/* Display name */}
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-[#011627] text-[#89CFF0] border border-[#89CFF0] hover:bg-[#011627]/90 hover:text-[#89CFF0] px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Sign Out
                </button>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;