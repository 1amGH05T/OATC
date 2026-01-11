import React from "react";
// import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  TicketIcon,
  XMarkIcon,
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

// const YOUR_SERVICE_ID = "service_bsz54ia";
// const YOUR_TEMPLATE_ID = "template_ov6vrot";
// const YOUR_PUBLIC_KEY = "OgsmA3xajlGXc1F_S";

export default function Events() {

//   const handleRegister = (eventTitle) => {
//     const fullName = prompt(
//       `Enter your full name to register for ${eventTitle}:`
//     );

//     if (!fullName || fullName.trim() === "") return;

//     const templateParams = {
//     user_name: fullName,
//     event_name: eventTitle,
// }

//     emailjs
//       .send(
//         YOUR_SERVICE_ID,
//         YOUR_TEMPLATE_ID,
//         templateParams,
//         YOUR_PUBLIC_KEY
//       )
//       .then(() => {
//         alert(
//           `Thank you, ${fullName}. You've successfully registered for ${eventTitle}.`
//         );
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//       });
//   };

  const [openModal1, setOpenModal1] = useState(null);

const events = [
  { title: "Thanksgiving Sunday", date: "Jan 4, 2026", time: "8:00 AM", description: "A New Year service of gratitude featuring testimonies, special worship, and a message celebrating God's provision and faithfulness." },
  { title: "Career Talk", date: "Jan 11, 2026", time: "8:00 AM", description: "An informative session aimed at teenagers and young adults exploring career choices. Industry professionals will share insights, tips, and personal experiences to help attendees make informed decisions about their future career paths."},
  { title: "Prayer Sunday", date: "Jan 25, 2026", time: "8:00 AM", description: "A special service focused on the power of prayer. Join us for a time of collective intercession, worship, and reflection as we seek God's guidance and blessings for our lives, community, and the world."},
  { title: "Thanksgiving Sunday", date: "Feb 1, 2026", time: "8:00 AM", description: "A mid-season thanksgiving service with communal praise, gratitude testimonies, and a short message on giving thanks in all seasons." },
  { title: "Lily Among Thorns", date: "Feb 8, 2026", time: "8:00 AM", description: "A reflective service themed 'Lily Among Thorns' focusing on hope and resilience through worship, scripture, and a devotional message." },
  { title: "Movie Sunday", date: "Feb 15, 2026", time: "8:00 AM", description: "A family-friendly film screening followed by a brief discussion and fellowship—popcorn and refreshments provided." },
  { title: "Thanksgiving Sunday", date: "Mar 1, 2026", time: "8:00 AM", description: "A celebration of blessings with music, prayers of gratitude, and shared testimonies from the congregation." },
  { title: "Gender Sunday", date: "Mar 8, 2026", time: "8:00 AM", description: "A thoughtful service exploring topics of gender, identity, and inclusion through scripture-based teaching and compassionate dialogue." },
  { title: "Worship Sunday", date: "Mar 22, 2026", time: "8:00 AM", description: "An extended worship experience featuring guest musicians, praise sets, and focused times of prayer and reflection." },
  { title: "Ruby Sunday", date: "Mar 29, 2026", time: "8:00 AM", description: "A celebratory service marking a special church milestone with music, testimonies, and post-service refreshments for fellowship." },
];


  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-slate-100"
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
                className="bg-white dark:bg-slate-900 p-6 md:p-8 shadow-lg rounded-2xl border-t-4 border-amber-400 space-y-3"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
                {/* <button
                  onClick={() => handleRegister(e.title)}
                  className="mt-6 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  Register
                  <TicketIcon className="w-5 h-5" />
                </button> */}

                <button
                  onClick={() => setOpenModal1(i)}
                  className="mt-6 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  Learn More
                </button>
                </div>

                <AnimatePresence>
                                  {openModal1 === i && (
                                    <motion.div
                                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                    >
                                      <motion.div
                                        className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 w-full max-w-md mx-4 sm:mx-auto relative"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                      >
                                        <button
                                          onClick={() => setOpenModal1(null)}
                                          className="absolute top-3 right-3 text-slate-600 dark:text-slate-300 hover:text-red-500"
                                        >
                                          <XMarkIcon className="w-6 h-6" />
                                        </button>
                
                                        <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                                          {e.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 mb-2">
                                          {e.date} - {e.time}
                                        </p>
                                        <p className="text-slate-700 dark:text-slate-200">
                                          {e.description}
                                        </p>
                                      </motion.div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
