//Global Section Wrapper Component to maintain consistent width and centering across all sections
//Usage: Wrap any section content with <SectionWrapper> to apply consistent styling
//Props:
// - children: The content to be wrapped inside the section
// - className: Additional custom classes to be applied to the section container
//Example:
// <SectionWrapper className="my-8">
//   <YourSectionContent />
// </SectionWrapper>
//This component ensures that all sections have a maximum width and are centered on the page
//It helps maintain a uniform layout throughout the application
//I hope it works 😁😁🤞🤞
export default function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`mx-auto w-full max-w-[1440px] ${className}`}
    >
      {children}
    </section>
  );
}

