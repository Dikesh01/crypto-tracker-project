import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          𝙏𝙧𝙖𝙘𝙠 𝘾𝙧𝙮𝙥𝙩𝙤
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          𝙍𝙚𝙖𝙡 𝙏𝙞𝙢𝙚.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          alt="#"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            duration: 2,
            repeatType: "mirror",
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" alt="#" />
      </div>
    </div>
  );
}

export default MainComponent;
