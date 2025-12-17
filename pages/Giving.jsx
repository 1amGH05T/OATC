import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  DocumentDuplicateIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Giving() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "0001399102";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">

        {/* Bank / Account Details */}
        <motion.div
          className="mt-16 bg-indigo-900 rounded-3xl p-10 max-w-3xl mx-auto text-left"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{duration:1.2, delay:0.2}}
        >
          <motion.h2
            className="text-2xl font-bold text-amber-400 text-center"
            variants={fadeIn}
          >
            Church Account Details
          </motion.h2>

          <motion.p
            className="mt-4 text-indigo-200 text-center"
            variants={fadeIn}
          >
            You can give via bank transfer using the details below.
          </motion.p>

          <motion.div
            className="mt-8 space-y-4 text-white"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{duration:1.2, delay:0.2}}
          >
            <motion.div
              className="flex justify-between border-b border-indigo-700 pb-2"
              variants={fadeUp}
            >
              <span className="font-semibold">Account Name</span>
              <span>RCCG(TEENS CHURCH)</span>
            </motion.div>

            <motion.div
              className="flex justify-between border-b border-indigo-700 pb-2"
              variants={fadeUp}
            >
              <span className="font-semibold">Bank Name</span>
              <span>STERLING BANK</span>
            </motion.div>

            <motion.div
              className="flex border-b justify-between border-indigo-700 pb-2 items-center space-x-2"
              variants={fadeUp}
            >
              <span className="font-semibold">Account Number</span>
              <span className="flex items-center">{textToCopy}
                <button onClick={handleCopy} className="p-1">
                {copied ? (
                  <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <DocumentDuplicateIcon className="w-5 h-5" />
                )}
              </button>
              </span>
            </motion.div>

            <motion.div
              className="flex justify-between"
              variants={fadeUp}
            >
              <span className="font-semibold">Purpose</span>
              <span>Tithe / Offering / Donation</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
