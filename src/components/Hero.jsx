import banner from "../assets/Rectangle 7.png";
import whiteBorder from "../assets/Group 818.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={banner}
        alt="banner"
        className="w-full h-screen object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient_blue_darkblue opacity-70"></div>
      <img
        src={whiteBorder}
        alt="border"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
      <div className="hero_text_div">
        <p
          className="text-sm mb-4 font-vollkorn md:text-base lg:text-lg animate-slide-in-top"
          data-animate-delay="0.5s"
        >
          Explore the world
        </p>
        <h2
          className="text-4xl font-merienda mb-4 text-center md:text-5xl lg:text-6xl animate-slide-in-right"
          data-animate-delay="1s"
        >
          Make your life a
        </h2>
        <p
          className="text-3xl font-vollkorn mb-4 text-center md:text-4xl lg:text-5xl animate-slide-in-left"
          data-animate-delay="1.5s"
        >
          Memorable Syphony
        </p>
        <h2
          className="text-3xl font-vollkorn mb-4 text-center md:text-4xl lg:text-5xl animate-slide-in-left"
          data-animate-delay="2s"
        >
          of travel
        </h2>
        <p
          className="text-xs mb-8 text-center md:text-sm lg:text-base animate-slide-in-bottom"
          data-animate-delay="2.5s"
        >
          It’s time to elevate your travel out of the ordinary. Passionate about
          travel and tailor-made holidays, we use our in-depth knowledge to
          craft trips that push the boundaries beyond your imagination. We have
          hand-picked many breathtaking experiences for you, a preview of the
          curated journeys you will indulge in.
        </p>
        <button
          className="explore-button animate-slide-in-bottom"
          data-animate-delay="3s"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
