import SectionWrapper from "../components/common/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper className="relative bg-neutralLight  py-1 m-1 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto mt-20 space-y-16">

        {/* HERO */}
        <div className="text-center max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            About UrbanGlide
          </h1>
          <p className="mt-4 text-lg text-neutralDark/80 leading-relaxed">
            Where passion meets movement — and every ride tells a story.
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="max-w-[900px] mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary">Who We Are</h2>
          <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
            UrbanGlide is a modern lifestyle and skating brand built for people who move differently. 
            Whether you’re a beginner learning your first glide or a street skater pushing your limits,
            we exist to support your journey with reliable gear, real community, and inspiration that 
            keeps you rolling.
          </p>

          <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
            We believe skating is more than a hobby — it's confidence, freedom, expression, 
            and wellness. UrbanGlide was created to give skaters of all ages and levels a space 
            where they can feel guided, supported, and encouraged to grow.
          </p>
        </div>

        {/* MISSION */}
        <div className="max-w-[900px] mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
          <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
            To make skating accessible, safe, and enjoyable for everyone — while building a community 
            that inspires movement, connection, and self-expression.
          </p>
        </div>

        {/* WHAT MAKES US DIFFERENT */}
        <div className="max-w-[900px] mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-primary">What Makes Us Different</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary">Quality You Can Trust</h3>
              <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
                Our gear is hand-picked and tested for durability, comfort, and safety — 
                whether you're cruising, practicing tricks, or skating with your family.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">A Community-First Brand</h3>
              <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
                We're not just a shop. We organize meet-ups, training sessions, and events 
                that bring skaters together from all corners of the city.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary">Support for All Levels</h3>
              <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
                From kids and beginners to advanced street skaters, we help you find the perfect fit 
                and build your confidence step by step.
              </p>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="max-w-[900px] mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary">Our Values</h2>

          <ul className="space-y-3 text-neutralDark/80 text-lg leading-relaxed font-saira">
            <li>• <strong>Inclusivity</strong> — Everyone is welcome on the track.</li>
            <li>• <strong>Safety</strong> — Gear that protects, supports, and empowers.</li>
            <li>• <strong>Community</strong> — We grow together and learn from each other.</li>
            <li>• <strong>Innovation</strong> — Always improving our collection for better performance.</li>
            <li>• <strong>Passion</strong> — Skating is more than movement — it’s a lifestyle.</li>
          </ul>
        </div>

        {/* VISION */}
        <div className="max-w-[900px] mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
          <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
            We aim to transform skating culture across Africa — starting with local parks, communities, 
            and youth groups — by making quality gear available and building a platform that inspires 
            healthy, active lifestyles.
          </p>
          <p className="text-neutralDark/80 text-lg leading-relaxed font-saira">
            UrbanGlide isn’t just a brand.  
            It’s a movement.  
            And the movement is just beginning.
          </p>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="text-center max-w-[700px] mx-auto pt-4">
          <p className="text-xl text-primary font-semibold">
            No matter your age, pace, or skill level, there’s a place for you here.
          </p>
          <p className="text-lg text-neutralDark/80 mt-2">
            Join UrbanGlide and roll with confidence.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
