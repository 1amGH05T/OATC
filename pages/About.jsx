import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-slate-100">
              About Overcomers Assembly Teens Church
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Overcomers Assembly Teens Church (OATC) is a vibrant and welcoming
              community committed to helping young people grow in faith, love, and
              purpose. We believe every teen has the potential to make a difference
              in the world through Christ.
            </p>
          </section>

          {/* Our Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-10 bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-10">
            <div>
              <h2 className="text-3xl font-bold text-indigo-700 dark:text-amber-400 mb-4">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-300">
                To nurture a generation of young believers who are spiritually strong,
                socially responsible, and fully equipped to impact their communities
                and the world with love, faith, and integrity.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-indigo-700 dark:text-amber-400 mb-4">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-300">
                To be a beacon of hope and inspiration for teens, fostering a
                community where faith, creativity, and service converge to build
                leaders who influence their generation for Christ.
              </p>
            </div>
          </section>

          {/* History */}
          <section className="bg-indigo-900 rounded-3xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-4 text-amber-400">Our History</h2>
            <p className="text-indigo-200 text-lg max-w-4xl mx-auto">
              Established in 2010, Overcomers Assembly Teens Church started as a small
              group of passionate young believers committed to serving God and their
              community. Over the years, the church has grown into a dynamic ministry
              that hosts weekly services, youth programs, community outreach initiatives,
              and life-transforming events. We are proud of the impact we've made in the
              lives of countless teens and families across Lagos and beyond.
            </p>
          </section>

          {/* Ministries */}
          <section className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Worship & Music", description: "Uplifting worship sessions that inspire hearts and deepen faith." },
              { title: "Youth Programs", description: "Engaging programs for teens that build character, leadership, and community." },
              { title: "Community Outreach", description: "Projects that serve and support our local and global community." }
            ].map((ministry, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-indigo-700 dark:text-amber-400">{ministry.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{ministry.description}</p>
              </div>
            ))}
          </section>

          {/* Service Times & Location */}
          <section>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-amber-400">Service Times</h2>
              <ul className="mt-4 text-slate-600 dark:text-slate-300 space-y-3">
                <li>Sunday Worship – 9:00 AM & 11:00 AM</li>
                <li className="font-semibold">
                  Midweek Services
                  <br />
                  Digging Deep: Tuesday 6:00 – 8:00 PM
                </li>
              </ul>
            </div>
          </section>

          {/* What to Expect */}
          <section className="mt-16 bg-indigo-900 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white">What to Expect</h2>
            <p className="mt-4 text-indigo-200 max-w-3xl mx-auto text-lg">
              At OATC, you’ll find a warm and welcoming community, powerful worship,
              inspiring teaching, and opportunities to grow spiritually, socially, and
              personally. Whether you’re visiting for the first time or looking for a
              home church, we welcome you to be part of our family.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
