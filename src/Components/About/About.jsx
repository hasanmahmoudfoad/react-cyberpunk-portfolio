import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import profileImage from "../../assets/PersonalImages/PersonalStandingGrey.png";

export default function About() {
  const [isGlitching, setIsGlitching] = useState(false);

  // Trigger glitch effect every 10 seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      // Reset glitch after animation completes
      setTimeout(() => setIsGlitching(false), 1000);
    }, 10000); // 10 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.textContent}>
            <div className="position-relative"></div>
            <h1 className="ms-4">
              <span className={`glow fw-normal LargeHeadding`}>Hi, I am</span>{" "}
              <span className={`${styles.highlight} LargeHeadding`}>Hasan</span>
              <br />
              <span className="shopify Headding">Shopify</span>{" "}
              <span className={`glow fw-normal Headding`}>Developer</span>
            </h1>

            <div className={styles.divider}></div>

            <p className={styles.tagline}>
              Shopify Developer | Delivering Tailored E-commerce Experiences
            </p>

            <div className={styles.description}>
              <p>
                I specialize in creating custom Shopify solutions that drive
                conversions and enhance user experiences. From custom themes and
                apps to performance optimization and seamless integrations, I
                build e-commerce stores that not only look great but perform
                exceptionally.
              </p>

              <div className={styles.skills}>
                <span className={styles.skillTag}>Html</span>
                <span className={styles.skillTag}>Css</span>
                <span className={styles.skillTag}>Bootstrap</span>
                <span className={styles.skillTag}>JS</span>
                <span className={styles.skillTag}>jQuery</span>
                <span className={styles.skillTag}>Liquid</span>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Shopify API</span>
                <span className={styles.skillTag}>Custom Themes</span>
                <span className={styles.skillTag}>Store Optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.imageContainer}>
            {/* Cyberpunk frame */}
            <div className={styles.cyberpunkFrame}>
              <div className={styles.frameGlow}></div>
              <div className={styles.frameGrid}></div>

              {/* Image with top stick-out effect and glitch */}
              <div className={`${styles.profileImageWrapper}`}>
                <div
                  className={` ${styles.profileImageWrapperAnimationLayer} ${isGlitching ? styles.glitchActive : ""}`}
                >
                  <img
                    src={profileImage} // Replace with your image import
                    alt="Hasan - Shopify Developer"
                    className={`${styles.profileImage} ${isGlitching ? styles.glitching : ""}`}
                  />
                  {/* Glitch layers */}

                  {/* <div
                    className={`${styles.glitchLayer} ${styles.glitchLayer2}`}
                  ></div>                   */}
                  {/* <div
                    className={`${styles.glitchLayer} ${styles.glitchLayer1}`}
                  ></div> */}
                </div>

                <div className={styles.imageGlow}></div>
              </div>

              {/* Corner accents */}
              <div className={`${styles.corner} ${styles.cornerTL}`}></div>
              <div className={`${styles.corner} ${styles.cornerTR}`}></div>
              <div className={`${styles.corner} ${styles.cornerBL}`}></div>
              <div className={`${styles.corner} ${styles.cornerBR}`}></div>

              {/* Cyberpunk scan line effect */}
              <div className={styles.scanLine}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
