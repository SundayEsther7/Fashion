import { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }

    // Simulate success (for now)
    setStatus("success");
    setTimeout(() => {
      setEmail("");
      setStatus(null);
    }, 2500);
  };

  return (
    <SectionWrapper
      className="relative w-full h-[480px] bg-[url('/src/assets/background.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-primary/60"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto h-full flex flex-col justify-center lg:items-end px-6 lg:px-12">
        <div className="text-white text-center lg:text-right max-w-[540px] space-y-6">

          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.25]">
            Join the Movement.<br />Roll With the Community.
          </h2>

          <p className="text-lg opacity-90">
            Subscribe for skate drops, street sessions, and exclusive deals.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`
                w-full sm:w-[360px] h-[56px] rounded-md px-4 text-neutralDark
                placeholder-neutralDark/60 focus:outline-none
                transition ring-2
                ${status === "error" ? "ring-red-500" : ""}
                ${status === "success" ? "ring-accent" : "ring-transparent"}
              `}
            />

            <button
              onClick={handleSubmit}
              className="w-full sm:w-[150px] h-[56px] bg-accent text-neutralDark font-bold rounded-md hover:bg-accent/80 transition"
            >
              Subscribe
            </button>
          </div>

          {/* Message */}
          {status === "error" && (
            <p className="text-red-300 text-sm mt-2">Please enter a valid email address.</p>
          )}
          {status === "success" && (
            <p className="text-accent text-sm mt-2 font-semibold">You're in! Check your inbox 🎉</p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
