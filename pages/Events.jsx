import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  ClockIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Events() {
  const events = [
    {
      title: "Thanksgiving Sunday",
      date: "Jan 4, 2026",
      time: "8:00 AM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "Career Talk",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "Prayer Sunday",
      date: "Jan 25, 2026",
      time: "8:00 PM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
    {
      title: "General Workers Retreat",
      date: "Jan 10, 2026",
      time: "4:00 PM",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Page Header */}
          <motion.h1
            className="text-4xl font-extrabold text-center text-slate-900 dark:text-slate-100"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Upcoming Events
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((e, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-slate-900 p-8 shadow-lg rounded-2xl border-t-4 border-amber-400 space-y-3"
                variants={fadeUp}
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {e.title}
                </h2>

                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CalendarDaysIcon className="w-5 h-5 text-indigo-600 dark:text-amber-400" />
                  {e.date}
                </p>

                <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <ClockIcon className="w-5 h-5 text-indigo-600 dark:text-amber-400" />
                  {e.time}
                </p>

                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-md flex items-center gap-2">
                  Register
                  <TicketIcon className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
