import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  Mail,
  Phone,
  ChevronDown,
  Send,
} from "lucide-react";

const faqs = [
  {
    question: "How do I verify a submitted problem?",
    answer:
      "Open the Verification Queue from the dashboard and select a problem. Review the submitted details and choose Verify, Request More Info, or Reject.",
  },
  {
    question: "How do I check for duplicate problems?",
    answer:
      "After verification, open Duplicate Check to compare the problem with existing submissions before continuing to categorization.",
  },
  {
    question: "How are universities matched with problems?",
    answer:
      "University recommendations are based on the problem category, location, relevant expertise, previous projects, and matching score.",
  },
  {
    question: "Can I change an assigned university?",
    answer:
      "Yes. Open the university assignment screen and select another university or coordinator before submitting the assignment.",
  },
  {
    question: "Where can I see my previous review actions?",
    answer:
      "Open Review History from the reviewer dashboard to see verification, duplicate checks, and university assignment activities.",
  },
];

function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.subject.trim() || !formData.message.trim()) {
      setSuccess("Please fill in both subject and message.");
      return;
    }

    setSuccess(
      "Your support request has been submitted successfully."
    );

    setFormData({
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#092f5d]">
            Help & Support
          </h1>

          <p className="mt-1 text-sm text-[#687680]">
            Find answers or contact the SocioSolve support team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#e1e7ea] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#eef7f3] text-[#07865c]">
                <Mail size={19} />
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#092f5d]">
                  Email Support
                </h2>

                <p className="mt-1 text-xs text-[#687680]">
                  Get help through email.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold text-[#07865c]">
              support@sociosolve.in
            </p>
          </div>

          <div className="rounded-lg border border-[#e1e7ea] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#eef4f8] text-[#355c91]">
                <Phone size={19} />
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#092f5d]">
                  Helpline
                </h2>

                <p className="mt-1 text-xs text-[#687680]">
                  Monday to Friday, 10 AM – 6 PM
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm font-semibold text-[#355c91]">
              +91 1800 123 4567
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#e1e7ea] bg-white p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#eef7f3] text-[#07865c]">
              <HelpCircle size={19} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#092f5d]">
                Frequently Asked Questions
              </h2>

              <p className="mt-1 text-xs text-[#687680]">
                Quick answers to common reviewer questions.
              </p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-[#e5e9ec]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="text-xs font-semibold text-[#344653] sm:text-sm">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`shrink-0 text-[#7b8991] transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="pb-4 pr-8 text-xs leading-5 text-[#687680]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#e1e7ea] bg-white p-5 sm:p-6">
          <h2 className="text-sm font-bold text-[#092f5d]">
            Contact Support
          </h2>

          <p className="mt-1 text-xs text-[#687680]">
            Could not find what you were looking for? Send us a message.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-4"
          >
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#344653]">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your issue"
                className="w-full rounded-md border border-[#d7e0e4] px-3 py-3 text-sm text-[#344653] outline-none transition placeholder:text-[#a0aaaf] focus:border-[#07865c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#344653]">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your issue..."
                className="w-full resize-none rounded-md border border-[#d7e0e4] px-3 py-3 text-sm text-[#344653] outline-none transition placeholder:text-[#a0aaaf] focus:border-[#07865c]"
              />
            </div>

            {success && (
              <div
                className={`rounded-md px-4 py-3 text-xs font-medium ${
                  success.includes("successfully")
                    ? "border border-[#b9dec9] bg-[#eefaf4] text-[#07865c]"
                    : "border border-[#efd2ce] bg-[#fff7f5] text-[#d84a3a]"
                }`}
              >
                {success}
              </div>
            )}

            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-[#07865c] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#06754f]"
            >
              <Send size={14} />
              Submit Request
            </button>
          </form>
        </div>

        <div className="mt-6">
          <Link
            to="/reviewer/dashboard"
            className="inline-flex rounded-md border border-[#d4dde2] px-5 py-2.5 text-sm font-semibold text-[#344653] transition hover:border-[#07865c] hover:text-[#07865c]"
          >
            ← Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HelpSupport;