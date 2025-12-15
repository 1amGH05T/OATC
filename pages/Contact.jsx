import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 text-center">
            Contact Us
          </h1>

          <p className="mt-4 text-center text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Reach out anytime.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-amber-400">
                Information
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Phone: +234 808 123 4567
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Email: info@churchname.org
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Address: 123 Church Avenue, Lagos
              </p>
            </div>

            {/* Form */}
            <form className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent p-3 rounded-lg mb-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent p-3 rounded-lg mb-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Message"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent p-3 rounded-lg mb-4 h-32 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              <button className="bg-amber-500 hover:bg-amber-600 transition text-indigo-900 font-semibold px-6 py-3 rounded-xl w-full shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
