import React from "react";
import styles from "../style";

import Team from "../components/Teams";
import { teams } from "../constants";
const Teams = () => {
  return (
    <div className={`bg-primary min-h-screen ${styles.paddingX}`}>
      <h2 className={` text-center ${styles.heading2}`}>
        Meet the team behind <br className="sm:block hidden" />
        <span className="text-gradient">VR Crafters </span>
        <section
          id="clients"
          className={`${styles.paddingY} ${styles.flexce} flex-col relative`}
        >
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <div className="w-full md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-center max-w-full`}>
                Everything you need about vr,ar and app development you can find
                it here
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-center justify-center w-screen feedback-contrainer relative z-[1]">
            {teams.map((card) => (
              <Team key={card.id} {...card} />
            ))}
          </div>
        </section>
      </h2>
    </div>
  );
};

export default Teams;
