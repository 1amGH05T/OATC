import React from "react";
import emailjs from "@emailjs/browser";
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

const YOUR_SERVICE_ID = "service_bsz54ia";
const YOUR_TEMPLATE_ID = "template_ov6vrot";
const YOUR_PUBLIC_KEY = "OgsmA3xajlGXc1F_S";

const events = [
  { title: "Career Talk", date: "Jan 10, 2026", time: "4:00 PM" },
  { title: "Prayer Sunday", date: "Jan 25, 2026", time: "8:00 AM" },
  { title: "Lily Among Thorns", date: "Feb 8, 2026", time: "8:00 AM" },
  { title: "Movie Sunday", date: "Feb 15, 2026", time: "8:00 AM" },
  { title: "Gender Sunday", date: "Mar 8, 2026", time: "8:00 AM" },
  { title: "Worship Sunday", date: "Mar 22, 2026", time: "8:00 AM" },
  { title: "Ruby Sunday", date: "Mar 29, 2026", time: "8:00 AM" },
];

export default function Events() {

  const handleRegister = (eventTitle) => {
    const fullName = prompt(
      `Enter your full name to register for ${eventTitle}:`
    );

    if (!fullName || fullName.trim() === "") return;

    const templateParams = {
    user_name: fullName,
    event_name: eventTitle,
}

    emailjs
      .send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        templateParams,
        YOUR_PUBLIC_KEY
      )
      .then(() => {
        alert(
          `Thank you, ${fullName}. You've successfully registered for ${eventTitle}.`
        );
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h1
            className="text-4xl font-extrabold text-center text-slate-900 dark:text-slate-100"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Upcoming Events From <br />January - March 2026
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
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

                <button
                  onClick={() => handleRegister(e.title)}
                  className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-md flex items-center gap-2"
                >
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
