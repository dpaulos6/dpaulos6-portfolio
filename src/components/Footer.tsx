import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

interface SocialMedia {
  id: number;
  name: string;
  icon: React.ElementType;
  href: string;
}

const socialMedias: SocialMedia[] = [
  {
    id: 1,
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/dpaulos6/",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/dpaulos6/",
  },
  {
    id: 3,
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/dpaulos6",
  },
];

function Footer() {
  return (
    <>
      <div className=" bg-gray-700 select-none">
        <div className="max-w-xs sm:max-w-lg mx-auto text-white py-20">
          <div className="text-center h-14 sm:h-[70px]">
            <code className="text-xl sm:text-3xl">
              Made by Diogo Paulos, using React and Tailwind.
            </code>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <div className="mx-auto inline-flex">
              {socialMedias.map((item: SocialMedia) => (
                <span key={item.id} className="px-2">
                  <a
                    href={item.href}
                    className="inline-flex link-modern-light hover:text-gray-300"
                    rel="noreferrer"
                  >
                    <item.icon className="my-auto mr-1" />
                    {item.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
