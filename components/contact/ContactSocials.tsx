import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const socials = [
  {
    icon: (
      <FiGithub className="h-5 w-5 hover:text-accent transition-all duration-500" />
    ),
    path: "https://github.com/sougata-github",
  },
  {
    icon: (
      <FaXTwitter className="h-5 w-5 hover:text-accent transition-all duration-500" />
    ),
    path: "https://twitter.com/sougata_x",
  },
  {
    icon: (
      <FaLinkedinIn className="h-5 w-5 hover:text-accent transition-all duration-500" />
    ),
    path: "https://linkedin.com/in/sougata-linkdin",
  },
];

const ContactSocials = () => {
  return (
    <div className="flex flex-row gap-8">
      {socials.map((social, index) => (
        <Link target="_blank" href={social.path} key={index}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default ContactSocials;
