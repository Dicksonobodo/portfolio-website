import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { whatsapp, linkedin, x, instagram } from "../assets";
import "../index.css";

const Contact = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/09011950323", // Replace with your WhatsApp number
      icon: whatsapp,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/Dicksonobodo", // Replace with your LinkedIn URL
      icon: linkedin,
    },
    {
      name: "X",
      url: "https://x.com/Dicksonobodo", // Replace with your X/Twitter handle
      icon: x,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/Dicksonobodo", // Replace with your Instagram handle
      icon: instagram,
    },
  ];

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <div className="mt-12 flex flex-col gap-6">
          <p className="text-white text-[16px]">
            Feel free to reach out to me on any of my social media platforms. I'd love to connect with you!
          </p>
          
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary hover:bg-opacity-80 py-3 px-6 rounded-xl outline-none text-white font-bold shadow-md shadow-primary transition-all duration-300 flex items-center gap-3"
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
