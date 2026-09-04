import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">
        <section className="grid min-h-[470px] items-center gap-8 lg:grid-cols-[0.85fr_1fr_0.7fr]">

          {/* =====================================================
              LEFT — CONTACT INFORMATION
          ===================================================== */}
          <div>
            <h1 className="text-[29px] font-extrabold tracking-[-0.7px] text-[#07336B] sm:text-[32px]">
              Get in Touch
            </h1>

            <p className="mt-2 max-w-[280px] text-[12px] font-medium leading-[19px] text-[#334E68]">
              Have questions or suggestions?
              <br />
              We’d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="mt-7 space-y-5">

              <ContactItem
                icon={Mail}
                title="Email"
                value="info@sociosolvejharkhand.in"
              />

              <ContactItem
                icon={Phone}
                title="Phone"
                value="+91 98765 43210"
              />

              <ContactItem
                icon={MapPin}
                title="Address"
                value="Ranchi, Jharkhand, India"
              />

            </div>

            {/* Social */}
            <div className="mt-8">
              <h2 className="text-[15px] font-extrabold text-[#07336B]">
                Follow Us
              </h2>

              <div className="mt-4 flex items-center gap-4">
                <SocialIcon label="f" />
                <SocialIcon label="𝕏" />
                <SocialIcon label="in" />
                <SocialIcon label="◎" />
              </div>
            </div>
          </div>

          {/* =====================================================
              CENTER — CONTACT FORM
          ===================================================== */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />

              <Input
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-md border border-[#D9E1E7] bg-white px-3.5 py-3 text-[11px] font-medium text-[#243B53] outline-none transition placeholder:text-[#536B7F]/80 focus:border-[#15915D] focus:ring-1 focus:ring-[#15915D]/20"
              />

              <button
                type="submit"
                className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#15915D] text-[12px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
              >
                {sent ? "Message Sent!" : "Send Message"}
                {!sent && <Send size={14} />}
              </button>
            </form>
          </div>

          {/* =====================================================
              RIGHT — ILLUSTRATION
          ===================================================== */}
          <div className="hidden h-[390px] items-end justify-center lg:flex">
            <ContactIllustration />
          </div>

        </section>
      </main>
    </div>
  );
}

/* ===============================================================
   CONTACT ITEM
================================================================ */

function ContactItem({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#EEF5FB] text-[#07336B]">
        <Icon size={17} strokeWidth={2} />
      </div>

      <div>
        <h3 className="text-[13px] font-extrabold text-[#07336B]">
          {title}
        </h3>

        <p className="mt-0.5 text-[11px] font-semibold text-[#334E68]">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ===============================================================
   INPUT
================================================================ */

function Input({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="h-[41px] w-full rounded-md border border-[#D9E1E7] bg-white px-3.5 text-[11px] font-medium text-[#243B53] outline-none transition placeholder:text-[#536B7F]/80 focus:border-[#15915D] focus:ring-1 focus:ring-[#15915D]/20"
    />
  );
}

/* ===============================================================
   SOCIAL ICON
================================================================ */

function SocialIcon({ label }) {
  return (
    <button
      type="button"
      aria-label="Social media"
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#07336B] text-[15px] font-extrabold text-white transition hover:bg-[#15915D]"
    >
      {label}
    </button>
  );
}

/* ===============================================================
   RIGHT SIDE ILLUSTRATION
================================================================ */

function ContactIllustration() {
  return (
    <div className="relative h-full w-[330px]">

      {/* Soft background */}
      <div className="absolute bottom-[15px] right-[5px] h-[210px] w-[280px] rounded-full bg-[#F1F6FA]" />

      {/* ===================================================
          PAPER PLANE
      =================================================== */}
      <div className="absolute right-[15px] top-[22px] rotate-[-12deg]">
        <div className="relative h-[55px] w-[78px]">
          <div className="absolute left-0 top-0 h-0 w-0 border-b-[38px] border-l-[78px] border-b-[#8AAFD9] border-l-transparent" />

          <div className="absolute left-[15px] top-[7px] h-0 w-0 border-b-[27px] border-l-[53px] border-b-[#C6D9EE] border-l-transparent" />
        </div>
      </div>

      {/* ===================================================
          ENVELOPE
      =================================================== */}
      <div className="absolute right-[105px] top-[85px]">
        <div className="relative h-[72px] w-[102px] rounded-md border border-[#8DAED0] bg-[#D9E7F5] shadow-sm">

          {/* flap */}
          <div className="absolute left-1/2 top-[-1px] h-[48px] w-[48px] -translate-x-1/2 rotate-45 border-r border-b border-[#91AFCE] bg-[#EEF5FC]" />

          {/* front */}
          <div className="absolute bottom-0 left-0 h-[42px] w-full overflow-hidden rounded-b-md bg-[#D8E7F5]">
            <div className="absolute left-0 top-0 h-[50px] w-[50px] -translate-x-[20px] -translate-y-[17px] rotate-45 border-r border-b border-[#9AB6D3]" />

            <div className="absolute right-0 top-0 h-[50px] w-[50px] translate-x-[20px] -translate-y-[17px] rotate-45 border-l border-b border-[#9AB6D3]" />
          </div>
        </div>
      </div>

      {/* Dotted flight path */}
      <div className="absolute right-[128px] top-[148px] h-[125px] w-[90px] rounded-br-[80px] border-b border-r border-dashed border-[#7598BD]" />

      {/* ===================================================
          LAPTOP PERSON
      =================================================== */}
      <div className="absolute bottom-0 right-[10px] h-[245px] w-[220px]">

        {/* Hair */}
        <div className="absolute right-[56px] top-[19px] h-[62px] w-[73px] rounded-[48%_52%_45%_55%] bg-[#07336B]" />

        {/* Face */}
        <div className="absolute right-[59px] top-[42px] h-[70px] w-[65px] rounded-[45%] bg-[#D99B72]">
          {/* ear */}
          <div className="absolute -left-[6px] top-[25px] h-[17px] w-[10px] rounded-full bg-[#C98A65]" />

          {/* hair front */}
          <div className="absolute -right-[2px] top-[-4px] h-[34px] w-[58px] rounded-[50%] bg-[#07336B]" />

          {/* eye */}
          <div className="absolute right-[15px] top-[35px] h-[4px] w-[4px] rounded-full bg-[#243B53]" />

          {/* smile */}
          <div className="absolute right-[12px] top-[49px] h-[7px] w-[16px] rounded-b-full border-b-2 border-[#8C5543]" />
        </div>

        {/* Neck */}
        <div className="absolute right-[80px] top-[103px] h-[22px] w-[27px] bg-[#C98A65]" />

        {/* Green shirt */}
        <div className="absolute right-[30px] top-[116px] h-[104px] w-[125px] rounded-t-[38px] rounded-b-[12px] bg-[#15915D]">
          {/* shirt highlight */}
          <div className="absolute left-[18px] top-[25px] h-[60px] w-[20px] rounded-full bg-[#1CA969]/50" />
        </div>

        {/* Left arm */}
        <div className="absolute right-[128px] top-[147px] h-[76px] w-[23px] rotate-[34deg] rounded-full bg-[#D99B72]" />

        {/* Right arm */}
        <div className="absolute right-[35px] top-[160px] h-[68px] w-[23px] rotate-[-30deg] rounded-full bg-[#D99B72]" />

        {/* Laptop */}
        <div className="absolute bottom-[42px] left-[24px] h-[62px] w-[120px] -rotate-[2deg] rounded-t-md border-4 border-[#617A98] bg-[#8EA9C6]">
          <div className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
        </div>

        {/* Laptop keyboard */}
        <div className="absolute bottom-[29px] left-[8px] h-[15px] w-[152px] -skew-x-[20deg] rounded-b-md bg-[#58708E]" />

        {/* Legs */}
        <div className="absolute bottom-0 left-[78px] h-[53px] w-[108px] rounded-t-[30px] bg-[#07336B]" />

        <div className="absolute bottom-0 right-[4px] h-[32px] w-[65px] rounded-full bg-[#07336B]" />
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-[35px] right-0 h-[8px] rounded-full bg-[#D9E4EE]" />
    </div>
  );
}

export default Contact;