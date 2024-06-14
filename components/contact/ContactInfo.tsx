import React from "react";
import { FaUser } from "react-icons/fa";

import { contactData } from "@/components/contact/ContactData";
import ContactSocials from "./ContactSocials";

const ContactInfo = () => {
  return (
    <ul className="flex flex-col gap-4 cursor-pointer overflow-hidden">
      {contactData.map((info, index) => (
        <li key={index} className="flex items-center gap-8">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
            <div className="text-[28px] max-xl:text-[24px] ">{info.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-white/60">{info.label}</p>
            <h3 className="text-xl max-xl:text-sm max-sm:text-xs max-w-[200px] truncate">
              {info.description}
            </h3>
          </div>
        </li>
      ))}
      <div className="flex items-center gap-8">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <FaUser className="text-[28px] max-xl:text-[24px]" />
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
