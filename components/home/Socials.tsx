import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const socials = [
  { icon: <FiGithub />, path: "https://github.com/sougata-github" },
  { icon: <FaXTwitter />, path: "https://twitter.com/sougata_x" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/sougata-linkdin" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          target="_blank"
          href={social.path}
          key={index}
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
