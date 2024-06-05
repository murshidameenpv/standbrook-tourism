/* eslint-disable react/prop-types */
import leftSquare from "../assets/Path 171.png";
import rightSquare from "../assets/Path 172.png";
import girl from "../assets/girl_with_bag.png";
import square1 from "../assets/Rectangle 13.png";
import square2 from "../assets/Rectangle 12.png";

const GirlBanner = ({ animate }) => {
  return (
    <div className="flex flex-center object-cover object-center ml-2">
      <div className={`relative ${animate ? "animate-slide-in-right" : ""}`}>
        <div>
          <img src={leftSquare} alt="img" loading="lazy" />
          <img
            src={square1}
            alt="img"
            loading="lazy"
            width={100}
            className={`absolute top-5 left-3 sm:right-4 sm:bottom-4 md:mx-3 md:my-3 ${
              animate ? "animate-slide-in-right" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`animate-slide-in-bottom ${
          animate ? "animate-slide-in-bottom" : ""
        }`}
      >
        <img src={girl} alt="img" loading="lazy" />
      </div>
      <div className={`relative ${animate ? "animate-slide-in-left" : ""}`}>
        <img src={rightSquare} alt="img" loading="lazy" />
        <img
          src={square2}
          alt="img"
          loading="lazy"
          width={100}
          className={`absolute bottom-3 right-4 sm:right-4 sm:bottom-4 md:mx-3 md:my-3 ${
            animate ? "animate-slide-in-left" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default GirlBanner;
