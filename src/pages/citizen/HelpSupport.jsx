import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  Send,
} from "lucide-react";

const faqs = [
  {
    question: "How do I report a problem?",
    answer:
      "Go to Report a Problem from your dashboard and complete the four-step reporting process with problem details, location, evidence, and review.",
  },
  {
    question: "How can I track my reported problem?",
    answer:
      "Open My Problems from your dashboard and select Track Problem to see the current status of your report.",
  },
  {
    question: "What happens after I submit a problem?",
    answer:
      "Your problem is first submitted for verification. After verification, it can be assigned to the appropriate team or institution for resolution.",
  },
  {
    question: "Can I edit a problem after submitting it?",
    answer:
      "Currently, submitted problems cannot be edited. Make sure all the information is correct before final submission.",
  },
  {
    question: "Where can I see notifications?",
    answer:
      "Open Notifications from your citizen dashboard to view updates related to your reported problems.",
  },
];

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);

  const [form, setForm] = useState({
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.subject.trim() || !form.message.trim()) {
      return;
    }

    setSuccess(
      "Your support request has been submitted successfully."
    );

    setForm({
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f5f8f7] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/citizen/dashboard"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0f766e] mb-5"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-[#f0fdfa] flex items-center justify-center">
                <HelpCircle
                  size={25}
                  className="text-[#0f766e]"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Help & Support
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  Get help with using SocioSolve or contact our support team.
                </p>
              </div>

            </div>
          </div>

          <div className="p-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

              <div className="rounded-xl border border-gray-200 p-5">
                <div className="w-10 h-10 rounded-lg bg-[#f0fdfa] flex items-center justify-center">
                  <MessageCircle
                    size={19}
                    className="text-[#0f766e]"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mt-4">
                  Live Support
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Chat with our support team for assistance.
                </p>

                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-[#0f766e] hover:underline"
                >
                  Start Chat
                </button>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Mail
                    size={19}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mt-4">
                  Email Support
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Send us your query and we'll get back to you.
                </p>

                <p className="mt-4 text-sm font-medium text-gray-700">
                  support@sociosolve.in
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Phone
                    size={19}
                    className="text-green-600"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mt-4">
                  Helpline
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Call us for urgent assistance.
                </p>

                <p className="mt-4 text-sm font-medium text-gray-700">
                  1800-XXX-XXXX
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Find quick answers to common questions.
                </p>

                <div className="space-y-3">

                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <div
                        key={faq.question}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          className="w-full flex items-center justify-between gap-4 p-4 text-left"
                        >
                          <span className="text-sm font-medium text-gray-800">
                            {faq.question}
                          </span>

                          <ChevronDown
                            size={18}
                            className={`text-gray-400 shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-sm text-gray-500 leading-6">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Contact Support
                </h2>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Couldn't find what you were looking for? Send us a message.
                </p>

                {success && (
                  <div className="mb-4 rounded-lg bg-[#f0fdfa] border border-[#ccfbf1] px-4 py-3 text-sm text-[#0f766e]">
                    {success}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What do you need help with?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none text-sm focus:border-[#0f766e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Describe your issue..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none text-sm resize-none focus:border-[#0f766e]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#0f766e] text-white text-sm font-medium hover:bg-[#0b625c]"
                  >
                    <Send size={17} />
                    Send Message
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}