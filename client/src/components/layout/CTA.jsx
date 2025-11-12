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

    // Simulate success
    setStatus("success");
    setTimeout(() => {
      setEmail("");
      setStatus(null);
    }, 2500);
  };

  return (
    <SectionWrapper
      className="relative pt-1 mt-1 w-full h-[480px] bg-[url('/src/assets/background.jpg')] bg-cover bg-center"
      aria-labelledby="cta-heading"
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-primary/60"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto h-full flex flex-col justify-center lg:items-end px-6 lg:px-12">
        <div className="text-white text-center lg:text-right max-w-[540px] space-y-6">

          {/* Accessible heading */}
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl font-extrabold leading-[1.25]"
          >
            Join the Movement.<br />Roll With the Community.
          </h2>

          <p className="text-lg opacity-90">
            Subscribe for skate drops, street sessions, and exclusive deals.
          </p>

          {/* Email form */}
          <form
            className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            aria-label="Subscribe to UrbanGlide newsletter"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`
                w-full sm:w-[360px] rounded-md px-4 py-3 text-neutralDark
                placeholder-neutralDark/60 focus:outline-none
                transition ring-2
                ${status === "error" ? "ring-red-500" : ""}
                ${status === "success" ? "ring-accent" : "ring-transparent"}
              `}
              aria-invalid={status === "error"}
              aria-describedby="feedback-message"
            />

            <button
              type="submit"
              className="
                w-full sm:w-auto px-8 py-3 
                bg-accent text-neutralDark font-bold rounded-md
                hover:bg-accent/80 transition active:scale-95
              "
            >
              Subscribe
            </button>
          </form>

          {/* Live feedback message */}
          <div
            id="feedback-message"
            className="mt-2 text-sm font-semibold"
            aria-live="polite"
            role="status"
          >
            {status === "error" && (
              <p className="text-red-300">Please enter a valid email address.</p>
            )}
            {status === "success" && (
              <p className="text-accent">You're in! Check your inbox.</p>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
