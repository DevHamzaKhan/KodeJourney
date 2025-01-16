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
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "Waitlist"), {
        email: email,
        timestamp: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      setEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-50 relative antialiased"> {/* Light background */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-green-600 font-sans font-bold">
          Join the Waitlist for Scholarly Tutors
        </h1>
        <p className="text-neutral-700 max-w-lg mx-auto my-4 text-base lg:text-lg"> {/* Darker text for light theme */}
          Scholarly Tutors is the premier platform where you can find expert tutors for any subject and teach anything you’re passionate about. Whether you are looking for personalized learning or teaching opportunities, our secure platform ensures great matchmaking for both students and tutors. Sign up now and start your journey towards knowledge and growth.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 w-full">
          <input
            type="email"
            placeholder="Enter your email (e.g., hi@scholarlytutors.com)"
            value={email}
            onChange={handleInputChange}
            className="rounded-lg border border-neutral-300 bg-white focus:ring-2 focus:ring-green-400 w-full px-4 py-3 text-sm lg:text-base placeholder:text-neutral-500 transition duration-200 ease-in-out focus:outline-none" /> {/* Light background and border */}
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-b from-green-400 to-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-700 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-center text-green-500">You’ve successfully joined the waitlist!</p>
        )}
      </div>
    </div>
  );
}