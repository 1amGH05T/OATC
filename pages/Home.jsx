import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [openModal, setOpenModal] = useState(null);

  const events = [
    { title: "Thanksgiving Sunday", date: "Jan 4, 2026", time: "8:00 AM", description: "A joyful service dedicated to giving thanks to God for His blessings. Join us for uplifting worship, heartfelt prayers, and inspiring testimonies as we celebrate gratitude together as a church family."},
    { title: "General Workers Retreat", date: "Jan 10, 2026", time: "4:00 PM", description:  "A rejuvenating retreat for all church workers to refresh their spirits and renew their commitment to service. This retreat will feature motivational speakers, team-building activities, and spiritual workshops designed to equip and inspire our dedicated volunteers."},
    { title: "Career Talk", date: "Jan 11, 2026", time: "8:00 AM", description: "An informative session aimed at Teenagers in their career choices. Industry professionals will share insights, tips, and personal experiences to help attendees make informed decisions about their future career paths."},
    { title: "Prayer Sunday", date: "Jan 25, 2026", time: "8:00 AM", description: "A special service focused on the power of prayer. Join us for a time of collective intercession, worship, and reflection as we seek God's guidance and blessings for our lives, community, and the world."},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
      <Navbar />

      {/* HERO SECTION */}
      <section className="h-[100vh] w-full flex items-center">
        <div className="bg-indigo-900/70 w-full h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to Overcomers Assembly Teens Church
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-lg text-indigo-100">
              A place to worship, grow, and connect with a loving community.
            </p>

            <div className="mt-8 flex space-x-4">
              <Link
                to="/visits"
                className="bg-amber-500 hover:bg-amber-600 transition px-6 py-3 rounded-xl text-indigo-900 font-semibold shadow-lg"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME MESSAGE */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          You Are Welcome Here
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg">
          We are a community of believers committed to loving God, loving
          people, and making disciples. Whether you're new to faith or looking
          for a home church, you’ll find a place here.
        </p>
      </section>

      {/* MORDECAIS */}
      <section className="bg-indigo-900 py-16 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="mb-8 text-center">
      <h3 className="text-3xl font-bold">Our Mordecais</h3>
    </div>

    <div className="grid md:grid-cols-3 gap-8 text-center">
      {[
        { name: "Mummy Bosede", img: "/images/mummy-bosede.jpeg" },
        { name: "Mummy Tinu", img: "/images/mummy-tinu.jpeg" },
        { name: "Mummy Albert", img: "/images/mummy-albert.jpeg" },
        { name: "Mummy Seun", img: "/images/mummy-seun.jpeg" },
        { name: "Mr Julius", img: "/images/mr-julius.jpeg" },
      ].map((person, i) => (
        <div key={i} className="space-y-3">
          <img
            src={person.img}
            alt={person.name}
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-amber-400"
          />
          <p className="font-semibold text-amber-300">{person.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* EVENTS PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
        Upcoming Events
      </h3>
      <Link
        to="/events"
        className="text-indigo-600 dark:text-amber-400 font-semibold"
      >
        View All →
      </Link>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {events.map((event, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-900 p-6 shadow-lg rounded-xl border-t-4 border-amber-400"
        >
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            {event.title}
          </h4>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{event.date}</p>
          <p className="text-slate-500 dark:text-slate-400">{event.time}</p>

          <button
            onClick={() => setOpenModal(i)}
            className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded-lg"
          >
            Learn More
          </button>
          {openModal === i && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-6 max-w-md mx-auto relative">
                    <button
                      onClick={() => setOpenModal(null)}
                      className="absolute top-3 right-3 text-slate-600 dark:text-slate-300 hover:text-red-500"
                    >
                      ✕
                    </button>
                    <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{event.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      {event.date} - {event.time}
                    </p>
                    <p className="text-slate-700 dark:text-slate-200">{event.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
    </div>
  </div>
</section>


      {/* TRIBES */}
      <section className="bg-indigo-950 py-16 text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-3xl font-bold">Tribes</h3>
    <p className="mt-4 text-indigo-200 max-w-3xl mx-auto">
      There's a tribe for everyone — join one and actively participate
      in church life.
    </p>

    <div className="grid md:grid-cols-4 gap-8 mt-12">
      {[
        { name: "Ruby", img: "/ruby.jpg" },
        { name: "Emerald", img: "/emrald.jpg" },
        { name: "Diamond", img: "/diamond.jpg" },
        { name: "Sapphire", img: "/sapphire.jpg" },
      ].map((tribe) => (
        <div
          key={tribe.name}
          className="bg-indigo-900 p-6 rounded-2xl shadow-lg space-y-4"
        >
          <img
            src={tribe.img}
            alt={`${tribe.name} Tribe`}
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="text-xl font-bold text-amber-400">
            {tribe.name} Tribe
          </h3>
          <button className="bg-amber-500 hover:bg-amber-600 transition text-indigo-900 px-5 py-2 rounded-lg font-semibold">
            Join
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FINAL CTA */}
      <section className="py-20 text-center bg-slate-50 dark:bg-slate-900">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Join Us This Sunday
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
          We can't wait to worship with you.
        </p>

        <Link
          to="/visits"
          className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 rounded-xl text-lg shadow-lg"
        >
          Plan Your Visit
        </Link>
      </section>

      <Footer />
    </div>
  );
}
