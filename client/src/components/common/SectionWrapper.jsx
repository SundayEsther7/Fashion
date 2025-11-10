
export default function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`mx-auto w-full max-w-[1440px]  ${className}`}
    >
      {children}
    </section>
  );
}

