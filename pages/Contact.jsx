import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
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

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bsz54ia',
      'template_8fepohe',
      form.current,
      'OgsmA3xajlGXc1F_S'
    )
    .then(() => {
      alert('Message sent!');
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to send message')
    });
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{duration:1.2, delay:0.2}}
          >
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Contact Us
            </h1>

            <p className="mt-4 text-center text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              We’d love to hear from you. Reach out anytime.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-10"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{duration:1.2, delay:0.2}}
          >
            {/* Contact info */}
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 space-y-4"
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-amber-400">
                Information
              </h2>

              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <PhoneIcon className="w-5 h-5 text-indigo-600 dark:text-amber-400" />
                Phone: +234 808 123 4567
              </p>

              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <EnvelopeIcon className="w-5 h-5 text-indigo-600 dark:text-amber-400" />
                Email: info@oatc.org
              </p>

              <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPinIcon className="w-5 h-5 text-indigo-600 dark:text-amber-400" />
                Address: 123 Church Avenue, Lagos
              </p>
            </motion.div>

            {/* Form */}
            <motion.form ref={form} onSubmit={sendEmail}
              className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8"
              variants={fadeUp}
            >
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent p-3 rounded-lg mb-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="reply_to"
                required
                placeholder="Your Email"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent p-3 rounded-lg mb-4 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Message"
                name="message"
                type="message"
                className="w-full border border-slate-300 dark:border-slate-700 bg-transparent p-3 rounded-lg mb-4 h-32 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 transition text-indigo-900 font-semibold px-6 py-3 rounded-xl w-full shadow-md flex items-center justify-center gap-2">
                Send Message
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
