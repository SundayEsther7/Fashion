import SectionWrapper from "../components/common/SectionWrapper";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic front-end validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("success");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus(null);
    }, 2500);
  };

  return (
    <SectionWrapper className="relative py-1 m-1 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-neutralDark/80 leading-relaxed">
            We’d love to hear from you — whether it's a question, feedback, or support.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — Contact Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Get In Touch</h2>

            <p className="text-lg text-neutralDark/80 leading-relaxed font-saira">
              Reach out to UrbanGlide for inquiries on products, skating guidance, 
              order support, or community events. Our team is ready to help.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary text-xl">Email</h3>
                <p className="text-neutralDark/80">support@urbanglide.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary text-xl">Phone</h3>
                <p className="text-neutralDark/80">+254 712 345 678</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary text-xl">Store Hours</h3>
                <p className="text-neutralDark/80">Mon – Sat: 9:00 AM – 6:00 PM</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary text-xl">Location</h3>
                <p className="text-neutralDark/80">
                  UrbanGlide HQ, Nairobi  
                  <br />Westlands, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-neutralLight">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-primary font-medium mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutralLight outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-medium mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutralLight outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutralLight outline-none h-[150px]"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/80 transition"
              >
                Send Message
              </button>

              {status === "success" && (
                <p className="text-accent font-semibold text-center">
                  Message sent! We’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-center">
                  Please fill in all fields.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
