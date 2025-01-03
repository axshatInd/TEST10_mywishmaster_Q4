"use client";
import React, { useState, useEffect } from "react";
import moment from "moment"; // Install moment library: npm install moment

const WishMaster = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm"));
  const [userName, setUserName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
    }, 60000); // Update every 60 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleWishMeClick = () => {
    const currentHour = parseInt(currentTime.split(":")[0]);

    if (currentHour >= 0 && currentHour < 6) {
      setWishMessage(`Hello ${userName}, good morning.`);
    } else if (currentHour >= 6 && currentHour < 12) {
      setWishMessage(`Good afternoon, ${userName}.`);
    } else if (currentHour >= 12 && currentHour < 18) {
      setWishMessage(`Good evening, ${userName}.`);
    } else {
      setWishMessage(`Good night, ${userName}.`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My WishMaster</h1>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="text-lg font-semibold text-black">
          Current Time: {currentTime}
        </p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 p-2 rounded-md w-full text-black"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleWishMeClick}
      >
        Wish Me
      </button>

      {wishMessage && <p className="mt-4 text-white">{wishMessage}</p>}
    </div>
  );
};

export default WishMaster;
