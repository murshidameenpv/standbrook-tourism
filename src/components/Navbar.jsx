import logo from "../assets/Group 929.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Destination", href: "#" },
    { label: "Philippine Cruises", href: "#" },
    { label: "Mice & Weddings", href: "#" },
    { label: "Ultra Luxury", href: "#" },
    { label: "Contact", href: "#" },
  ];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);


  const handleNavItemClick = (item) => {
    setActiveItem(item.label);
  };

  return (
    <nav className="flex flex-row sm:flex-col sm:justify-center justify-between items-center gap-3 mt-2 py-4">
      <img src={logo} className="logo md:w-23 md:h-14 ml-4" />
      <div className="hidden sm:flex justify-center gap-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`font-vollkorn font-sm text-xs ${
              activeItem === item.label ? "text-cyan" : "text-text_color"
            } hover:text-cyan transition duration-300`}
            onClick={() => handleNavItemClick(item)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="sm:hidden flex justify-center">
        <RxHamburgerMenu
          onMouseEnter={() => setNavOpen(true)}
          className="text-2xl mx-3 cursor-pointer"
        />
        {navOpen && (
          <div
            className="absolute top-20 left-0 w-full py-3 px-4 mb-10 bg-white z-10"
            onMouseEnter={() => setNavOpen(true)}
            onMouseLeave={() => setNavOpen(false)}
          >
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-vollkorn font-medium text-xs ${
                    activeItem === item.label
                      ? "text-cyan-500"
                      : "text-gray-800"
                  } hover:text-cyan transition duration-300`}
                  onClick={() => handleNavItemClick(item)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
