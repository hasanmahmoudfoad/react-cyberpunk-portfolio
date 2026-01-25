import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";
import toast, { Toaster } from "react-hot-toast";
import lookFrontProtrait from "../../assets/PersonalImages/lookFrontProtrait.png";
import neonlookfrontPortrait from "../../assets/PersonalImages/personalNeonLookFront.png";

export default function About() {
  const [isGlitching, setIsGlitching] = useState(false);

  const copyMail = () => {
    navigator.clipboard.writeText("hasanmahmoudfoad@gmail.com");
    toast("Mail copied to clipboard!", {
      duration: 2000,
      position: "bottom-right",
      style: {
        background: "var(--dark-navey)",
        color: "var(--light-blue)",
        border: "2px solid var(--light-purple)",
        boxShadow:
          " 0 0 40px rgba(0, 217, 255, 0.2),inset 0 0 40px rgba(0, 217, 255, 0.1)",
        top: "60px",
      },
      icon: "📋",
    });
  };

  // Trigger glitch effect every 10 seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      // Reset glitch after animation completes
      setTimeout(() => setIsGlitching(false), 1000);
    }, 20000); // 10 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`${styles.wrapper} container`}>
      <div className={`${styles.content}`}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.textContent}>
            <div className="position-relative"></div>
            <h1 className="">
              <span
                className={`font-neon text-blue-neon text-glow-blue extraLargeHeadding`}
              >
                Hi, I am
              </span>{" "}
              <span
                className={`font-neon text-purple-neon text-glow-purple extraLargeHeadding`}
              >
                Hasan
              </span>
              <br />
              <span className="font-shopify-bold-italic text-shopify Headding">
                Shopify
              </span>{" "}
              <span
                className={`font-neon text-blue-neon text-glow-blue Headding`}
              >
                &lt;Developer /&gt;
              </span>
            </h1>

            <div className={styles.divider}></div>

            <p className={styles.tagline}>
              | Delivering Tailored E-commerce Experiences
            </p>

            <div className={styles.description}>
              <div className={styles.codeframeheader}>
                <i className="fa-solid fa-minus ms-2 text-purple-neon text-glow-purple"></i>
                <i className="fa-regular fa-window-restore ms-2 text-purple-neon text-glow-purple"></i>
                <i className="fa-solid fa-xmark ms-2 text-purple-neon text-glow-purple"></i>
              </div>
              <div className={styles.codeframegrid}>
                <TypeAnimation
                  sequence={[
                    " Specialized in creating custom Shopify theme sections solutions that drive conversions and enhance user experiences.",
                    2000,
                    " Specialized in creating custom Shopify theme sections solutions that drive conversions and enhance user experiences.\nFrom custom themes and sections to performance optimization and seamless integrations.",
                    2000,
                    " Specialized in creating custom Shopify theme sections solutions that drive conversions and enhance user experiences.\nFrom custom themes and sections to performance optimization and seamless integrations.\nI build e-commerce stores that not only look great but perform exceptionally.",
                    3000,
                    " Specialized in creating custom Shopify theme sections solutions that drive conversions and enhance user experiences.\nFrom custom themes and sections to performance optimization and seamless integrations.\nI build e-commerce stores that not only look great but perform exceptionally.\nThat's it :).",
                  ]}
                  wrapper="p"
                  speed={75}
                  cursor={true}
                  style={{
                    whiteSpace: "pre-line",
                    fontSize: "1rem",
                    color: "#ddd",
                  }}
                  className={`p-2 m-0 font-monospace ${styles.typeAnimation} text-blue-neon`}
                />
              </div>
            </div>
            <div className={styles.tagsWrapper}>
              <span className="tag">Html</span>
              <span className="tag">Css</span>
              <span className="tag">Bootstrap</span>
              <span className="tag">JS</span>
              <span className="tag">jQuery</span>
              <span className="tag">Liquid</span>
              <span className="tag">React</span>
              <span className="tag">Shopify API</span>
              <span className="tag">Custom Themes</span>
              <span className="tag">Store Optimization</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={` flex-column ${styles.rightSection}`}>
          <div className={styles.imageContainer}>
            {/* Cyberpunk frame */}
            <div className={styles.cyberpunkFrame}>
              <div className={styles.frameGlow}></div>
              <div className={styles.frameGrid}></div>

              {/* Image with top stick-out effect and glitch */}
              <div className={`${styles.profileImageWrapper}`}>
                <div
                  className={` ${styles.profileImageWrapperAnimationLayer} ${isGlitching ? "glitch_ani" : ""}`}
                >
                  <img
                    src={lookFrontProtrait}
                    alt="Hasan - Shopify Developer"
                    className={`${styles.profileImage} ${styles.primaryImg} float_ani ${isGlitching ? styles.glitching : ""}`}
                  />
                  <img
                    src={neonlookfrontPortrait}
                    alt="Hasan - Shopify Developer"
                    className={`${styles.profileImage} ${styles.secondaryImg} float_ani`}
                  />
                </div>
                <div className={`pulse_ani ${styles.imageGlow}`}></div>
              </div>

              <div className={`${styles.corner} ${styles.cornerTL}`}></div>
              <div className={`${styles.corner} ${styles.cornerTR}`}></div>
              <div className={`${styles.corner} ${styles.cornerBL}`}></div>
              <div className={`${styles.corner} ${styles.cornerBR}`}></div>
            </div>
          </div>
          <div
            className={` mt-3 p-3 position-relative ${styles.contactCyberpunkFrame}`}
          >
            <div className="z-2 position-relative">
              <div className="p-2">
                <i className="fa-solid fa-location-dot me-3 text-purple-neon text-glow-purple"></i>
                <span className="font-monospace">Cairo, Egypt</span>
              </div>
              <div className="p-2">
                <i className="fa-solid fa-phone me-3 text-purple-neon text-glow-purple"></i>
                <span className="font-monospace">+20 115 338 0655</span>
              </div>
              <div className="p-2">
                <i class="fa-solid fa-envelope me-3 text-purple-neon text-glow-purple"></i>
                <span className="font-monospace">
                  hassanmahmoudfoad@gmail.com
                </span>
                <span className="ms-3">
                  <i
                    className="fa-regular text-light-blue fa-copy cursorPointer"
                    onClick={() => copyMail()}
                  ></i>
                </span>
              </div>
            </div>

            <div className={styles.frameGlow}></div>
            <div className={styles.frameGrid}></div>
          </div>
          <div className={styles.tagsWrapper}>
            <a
              href="www.linkedin.com/in/hasan-mahmoud-483366170"
              className={`text-decoration-none tag ${styles.accountTags}`}
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01570309eb9d8f76c5?mp_source=share"
              className={`text-decoration-none tag ${styles.accountTags}`}
            >
              UpWork
            </a>
            <a
              href="https://github.com/hasanmahmoudfoad"
              className={`text-decoration-none tag ${styles.accountTags}`}
            >
              GitHub
            </a>
            <a
              href="https://wuzzuf.net/me/Hassan-Mahmood-e69e93ee16"
              className={`text-decoration-none tag ${styles.accountTags}`}
            >
              Wuzzuf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
