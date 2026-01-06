import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [openModal, setOpenModal] = useState(null);

  const events = [
    { title: "Thanksgiving Sunday", date: "Jan 4, 2026", time: "8:00 AM", description: "A joyful service dedicated to giving thanks to God for His blessings. Join us for uplifting worship, heartfelt prayers, and inspiring testimonies as we celebrate gratitude together as a church family." },
    { title: "Career Talk", date: "Jan 11, 2026", time: "8:00 AM", description: "An informative session aimed at Teenagers in their career choices. Industry professionals will share insights, tips, and personal experiences to help attendees make informed decisions about their future career paths." },
    { title: "Prayer Sunday", date: "Jan 25, 2026", time: "8:00 AM", description: "A special service focused on the power of prayer. Join us for a time of collective intercession, worship, and reflection as we seek God's guidance and blessings for our lives, community, and the world." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        className="relative h-screen w-full overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/back.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-indigo-900/70 z-10 flex items-center">
          <motion.div
            className="max-w-5xl mx-auto px-6 text-white"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to Overcomers Assembly Teens Church
            </h1>

            <p className="mt-4 text-lg md:text-xl max-w-lg text-indigo-100">
              A place to worship, grow, and connect with a loving community.
            </p>

            <div className="mt-8">
              <Link
                to="/visits"
                className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-xl text-indigo-900 font-semibold shadow-lg inline-flex items-center gap-2"
              >
                Plan Your Visit
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WELCOME MESSAGE */}
      <motion.section
        className="py-20 text-center px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          You Are Welcome Here
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg">
          We are a community of believers committed to loving God, loving
          people, and making disciples. Whether you're new to faith or looking
          for a home church, you’ll find a place here.
        </p>
      </motion.section>

      {/* MORDECAIS */}
      <motion.section
        className="bg-indigo-900 py-16 text-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold flex justify-center items-center gap-2">
              <UsersIcon className="w-7 h-7 text-amber-400" />
              Our Mordecais
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Mummy Tinu", img: "/tinu.jpeg" },
              { name: "Mummy Bosede", img: "/bose.jpeg" },
              { name: "Mummy Funmi", img: "/funmi.jpg" },
              { name: "Mummy Albert", img: "/albert.jpg" },
              { name: "Mummy Olaifa", img: "/olaifa.jpeg" },
              { name: "Mummy Yinka", img: "/yinka.jpeg" },
              { name: "Bro Christopher", img: "/chris.jpeg" },
              { name: "Bro Julius", img: "/julius.jpeg" },
              { name: "Sis Josephine", img: "/josephine.jpg" },
              { name: "Bro Odunmorayo", img: "/odun.jpeg" },
              { name: "Sis Temitope", img: "/odun.jpeg" },
            ].map((person, i) => (
              <motion.div
                key={i}
                className="space-y-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-amber-400"
                />
                <p className="font-semibold text-amber-300">{person.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EVENTS PREVIEW */}
      <motion.section
        className="py-16 bg-slate-50 dark:bg-slate-800"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Upcoming Events
            </h3>
            <Link
              to="/events"
              className="text-indigo-600 dark:text-amber-400 font-semibold inline-flex items-center gap-1"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 shadow-lg rounded-xl border-t-4 border-amber-400"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {event.title}
                </h4>

                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300 mt-2">
                  <CalendarDaysIcon className="w-4 h-4" />
                  {event.date}
                </p>
                <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <ClockIcon className="w-4 h-4" />
                  {event.time}
                </p>

                <button
                  onClick={() => setOpenModal(i)}
                  className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded-lg"
                >
                  Learn More
                </button>

                <AnimatePresence>
                  {openModal === i && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 max-w-md mx-auto relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                      >
                        <button
                          onClick={() => setOpenModal(null)}
                          className="absolute top-3 right-3 text-slate-600 dark:text-slate-300 hover:text-red-500"
                        >
                          <XMarkIcon className="w-6 h-6" />
                        </button>

                        <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                          {event.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 mb-2">
                          {event.date} - {event.time}
                        </p>
                        <p className="text-slate-700 dark:text-slate-200">
                          {event.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TRIBES */}
      <motion.section
        className="bg-indigo-950 py-16 text-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Tribes</h3>
          <p className="text-gray-400">Join a tribe so you can acitvely participate in church activities</p>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { name: "Ruby", img: "/ruby.jpg", link: "https://chat.whatsapp.com/I0IScq52OIz3dNHB2Qazlc" },
              { name: "Emerald", img: "/emrald.jpg", link: "https://chat.whatsapp.com/F9bKoTeiRqgIeQSLZGgast" },
              { name: "Diamond", img: "/diamond.jpg", link: "https://chat.whatsapp.com/FqkFQGbBXht4gaeqJrY5YI" },
              { name: "Sapphire", img: "/sapphire.jpg", link: "https://chat.whatsapp.com/PLACEHOLDER_SAPPHIRE" },
            ].map((tribe) => (
              <motion.div
                key={tribe.name}
                className="bg-indigo-900 p-6 rounded-2xl shadow-lg space-y-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <img
                  src={tribe.img}
                  alt={`${tribe.name} Tribe`}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-amber-400">
                  {tribe.name} Tribe
                </h3>
                <a
                  href={tribe.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 transition text-indigo-900 px-5 py-2 rounded-lg font-semibold inline-block"
                >
                  Join
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="py-20 text-center bg-slate-50 dark:bg-slate-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Join Us This Sunday
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
          We can't wait to worship with you.
        </p>

        <Link
          to="/visits"
          className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 rounded-xl text-lg shadow-lg"
        >
          Plan Your Visit
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </motion.section>

      <Footer />
    </div>
  );
}