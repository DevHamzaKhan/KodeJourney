"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/Beams";
import { db } from '../firebase'; // Import your Firestore instance
import { collection, addDoc } from "firebase/firestore";

// Define the types for event objects
import { FormEvent, ChangeEvent } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // Use a single state to hold the message text
  const [messageOpacity, setMessageOpacity] = useState(0); // Control opacity for message box

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple email validation using regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageOpacity(1); // Show error message
      return;
    }

    setLoading(true);
    setMessage(""); // Clear previous messages
    setMessageOpacity(0); // Hide message box for valid submission

    try {
      const docRef = await addDoc(collection(db, "Waitlist"), {
        email: email,
        timestamp: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      setMessage("You’ve successfully joined the waitlist!");
      setMessageOpacity(1); // Show success message
      setEmail(""); // Clear email input
    } catch (e) {
      console.error("Error adding document: ", e);
      setMessage("An error occurred. Please try again later.");
      setMessageOpacity(1); // Show error message
    } finally {
      setLoading(false);
    }
  };

  // Modify this to prevent form submission in the keydown event
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior (form submission)
      handleSubmit(e as any); // Call handleSubmit manually
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#011627] relative antialiased"> {/* Exact Night Owl background color */}
      <BackgroundBeams /> {/* Light, whiteish beams */}
      <div className="max-w-2xl mx-auto p-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-[#89CFF0] to-[#89CFF0] font-sans font-bold">
          Join the Waitlist
        </h1>
        <p className="text-[#89CFF0] max-w-lg mx-auto my-4 text-sm lg:text-base"> {/* Light text color from Night Owl theme and smaller size */}
          KodeJourney offers a platform to learn coding through structured lessons and real-world projects. Develop coding skills, track progress, and build a portfolio—all for free.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 w-full">
          <input
            type="email"
            placeholder="Enter your email (e.g., hi@kodejourney.com)"
            value={email}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Modify to use the custom keydown handler
            className="rounded-lg border border-[#5e6d77] bg-[#011627] focus:ring-2 focus:ring-[#89CFF0] w-full px-4 py-3 text-[#89CFF0] text-sm lg:text-base placeholder:text-[#89CFF0] transition duration-200 ease-in-out focus:outline-none" /> {/* Dark background with light blue text and accent color for focus */}

          {/* Single message box for error or success */}
          <div
            className="mt-2 text-center transition-opacity duration-300"
            style={{
              opacity: messageOpacity,
              transition: "opacity 0.3s ease",
            }}
          >
            <span className={`text-sm lg:text-base ${message === "Please enter a valid email address." ? 'text-red-500' : 'text-[#89CFF0]'}`}>
              {message}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}