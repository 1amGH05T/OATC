import React from "react";
import Navbar from "../components/Navbar";

export default function Events() {
  const events = [
    {
      title: "Community Outreach",
      date: "Feb 20, 2025",
      time: "10:00 AM",
    },
    {
      title: "Youth Conference",
      date: "Mar 5, 2025",
      time: "4:00 PM",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center text-slate-900 dark:text-slate-100">
            Upcoming Events
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {events.map((e, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-8 shadow-lg rounded-2xl border-t-4 border-amber-400"
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {e.title}
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {e.date}
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  {e.time}
                </p>

                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-md">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
