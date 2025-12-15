import React from "react";
import Navbar from "../components/Navbar";

export default function Visit() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 text-center">
            Plan Your Visit
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-center text-lg max-w-2xl mx-auto">
            Everything you need to know before joining us for a service.
          </p>

          {/* Service Times & Location */}
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {/* Service Times */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-amber-400">
                Service Times
              </h2>
              <ul className="mt-4 text-slate-600 dark:text-slate-300 space-y-3">
                <li>• Sunday Worship – 8:00 AM Prompt</li>
                <li>
                  • Midweek Service – Tuesday and yhursday (Digging deep and
                  Gist night) 8:00 PM - 9:00 PM
                </li>
                <button className="mt-4 inline-block bg-amber-500 hover:bg-amber-600 transition text-indigo-900 font-semibold px-5 py-2 rounded-xl shadow-md">
                  <a href="">Join the online Whatsapp group</a>
                </button>
              </ul>
            </div>

            {/* Location */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-amber-400">
                Location
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                123 Church Avenue, Lagos, Nigeria
              </p>

              <div className="mt-6 w-full h-64 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126833.26789673891!2d3.146043384667967!3d6.579632791968198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9038945f9719%3A0xeef73b777a3dc6ee!2sThe%20Redeemed%20Christian%20Church%20of%20God%2C%20Overcomers%20Assembly!5e0!3m2!1sen!2sng!4v1763644604080!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-16 bg-indigo-900 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              What to Expect
            </h2>
            <p className="mt-4 text-indigo-200 max-w-3xl mx-auto text-lg">
              Friendly people, powerful worship, and a welcoming environment for
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
