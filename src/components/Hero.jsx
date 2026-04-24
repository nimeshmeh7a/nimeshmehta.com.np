// import content
import { useEffect, useState } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const text = hero.title;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, hero.title]);

  return (
    <section id="home" className="overflow-hidden relative">
      {/* Animated Cube Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cube-container">
          <div className="cube cube-1"></div>
          <div className="cube cube-2"></div>
          <div className="cube cube-3"></div>
          <div className="cube cube-4"></div>
          <div className="cube cube-5"></div>
          <div className="cube cube-6"></div>
        </div>
      </div>

      {/* Particle Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center z-10">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          {/* Enhanced Title with Typing Animation */}
          <div className="title-container">
            <h2 className="typing-text">
              {typedText}
              <span className="cursor-blink">|</span>
            </h2>
          </div>
          <br />
          
          {/* Enhanced Button with Hover Effects */}
          <div className="flex justify-end">
            <button className="btn enhanced-btn">
              <span className="btn-text">{hero.btnText}</span>
            </button>
          </div>
          
          {/* Enhanced Hero Content with Hover Effects */}
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 hero-content-item
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3 className="content-number">{content.count}</h3>
                <p className="content-text">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover hero-image"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
