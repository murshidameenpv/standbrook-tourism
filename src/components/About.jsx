import GirlBanner from "./GirlBanner";
import topSquare from "../assets/Path 173.png";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 1.0 }
    );

    if (aboutContainerRef.current) {
      observer.observe(aboutContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={aboutContainerRef}>
        {animate && (
          <div className="flex flex-col sm:flex-row flex-center mx-8 md:mx-12 lg:mx-20">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mx-5 px-4">
              <GirlBanner animate={animate} />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col items-start gap-2">
              <div className="flex items-end animate-slide-in-top">
                <img
                  src={topSquare}
                  alt="img"
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
                  loading="lazy"
                />
                <span className="font-vollkorn text-sm md:text-base lg:text-lg text-darkGreen -mx-6">
                  About Us
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl flex flex-col text-start gap-2 blue_gradient_forward font-merienda animate-slide-in-top">
                <TypeAnimation
                  sequence={[500, "Explore All Tour"]}
                  wrapper="span"
                  cursor={false}
                  repeat={false}
                />
                <TypeAnimation
                  sequence={[2000, "Of World With Us."]}
                  wrapper="span"
                  cursor={false}
                  repeat={false}
                />
              </h1>
              <p className="text-xs md:text-sm lg:text-base font-vollkorn text-gray_text animate-slide-in-top">
                At Stanbrook Tourism, we know that luxury is personal. With over
                two decade’s experience in arranging the finest luxury holidays,
                we go that extra mile to ensure that every detail is built
                around you. So, holidays since 2003. We therefore have the
                know-how and the
              </p>
              <p className="text-xs md:text-sm lg:text-base font-vollkorn text-gray_text mt-5 animate-slide-in-top">
                flexibility to adapt to these rapidly changing times, and so you
                can book with confidence, safe in the knowledge that if your
                plans have to change…they can!
              </p>
              <button className="orange_button md:text-lg lg:text-xl animate-slide-in-bottom">
                Know More
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
