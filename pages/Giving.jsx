import React from "react";
import Navbar from "../components/Navbar";

export default function Giving() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Give Online
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Your generosity fuels our mission and helps us reach more people.
          </p>

          {/* Online Giving */}
          <div className="mt-12 bg-white dark:bg-slate-900 shadow-xl p-10 rounded-2xl max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Support the Ministry
            </h2>

            <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-xl w-full font-semibold shadow-md">
              Give Now
            </button>

            <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
              Secure donations powered by your preferred payment provider.
            </p>
          </div>

          {/* Bank / Account Details */}
          <div className="mt-16 bg-indigo-900 rounded-3xl p-10 max-w-3xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-amber-400 text-center">
              Church Account Details
            </h2>

            <p className="mt-4 text-indigo-200 text-center">
              You can also give via bank transfer using the details below.
            </p>

            <div className="mt-8 space-y-4 text-white">
              <div className="flex justify-between border-b border-indigo-700 pb-2">
                <span className="font-semibold">Account Name</span>
                <span>Overcomers Assembly</span>
              </div>

              <div className="flex justify-between border-b border-indigo-700 pb-2">
                <span className="font-semibold">Bank Name</span>
                <span>Example Bank Plc</span>
              </div>

              <div className="flex justify-between border-b border-indigo-700 pb-2">
                <span className="font-semibold">Account Number</span>
                <span>1234567890</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Purpose</span>
                <span>Tithe / Offering / Donation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
