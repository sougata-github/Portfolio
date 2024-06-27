import React from "react";
import { FaUser } from "react-icons/fa";

import { contactData } from "@/components/contact/ContactData";
import ContactSocials from "./ContactSocials";

const ContactInfo = () => {
  return (
    <ul className="flex flex-col gap-4 cursor-pointer overflow-hidden">
      {contactData.map((info, index) => (
        <li key={index} className="flex items-center gap-8">
          <div className="w-[48px] h-[48px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
            <div className="text-[22px] max-xl:text-[20px]">{info.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-white/60">{info.label}</p>
            <h3 className="text-lg max-sm:text-sm hover:text-accent transition-all duration-500">
              {info.description}
            </h3>
          </div>
        </li>
      ))}

      <div className="flex items-center gap-8">
        <div className="w-[48px] h-[48px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <FaUser className="text-[22px] max-xl:text-[20px]" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white/60">Socials</p>
          <ContactSocials />
        </div>
      </div>
    </ul>
  );
};

export default ContactInfo;
