import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub className="h-6 w-6 max-md:h-5 max-md:w-5" />,
    path: "https://github.com/sougata-github",
  },
  {
    icon: <FaXTwitter className="h-6 w-6 max-md:h-5 max-md:w-5" />,
    path: "https://twitter.com/sougata_x",
  },
  {
    icon: <FaLinkedinIn className="h-6 w-6 max-md:h-5 max-md:w-5" />,
    path: "https://linkedin.com/in/sougata-linkdin",
  },
];

const ContactSocials = () => {
  return (
    <div className="flex flex-row gap-8">
      {socials.map((social, index) => (
        <Link target="_blank" href={social.path} key={index} className="">
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default ContactSocials;
