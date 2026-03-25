import styles from "./Work.module.css";
import { useEffect, useRef } from "react";

import { useBootstrapTooltip } from "../../hooks/useBootstrapTooltip";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "swiper/css/navigation";

import "swiper/css/pagination";

export default function Work() {
  const squareRef = useRef(null);
  const eyeballRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      if (squareRef.current) {
        squareRef.current.style.transform = `translate(${posX * 0.0003}%, ${posY * 0.0003}%)`;
      }

      if (eyeballRef.current) {
        eyeballRef.current.style.transform = `translate(${posX * 0.0008}%, ${posY * 0.0008}%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* <section className={`${styles.neonTitle}`}>
        <div className={`${styles.text}`}>
          <h1>Liquid</h1>
          <h1>Liquid</h1>
        </div>
      </section> */}
      <article>
        <title>Work Experience</title>
      </article>
      <section className="container-fluid">
        <h1 className="text-center font-orbitron text-blue-neon text-glow-blue flicker_ani headding-3">
          <span className="headdingLetter flicker_ani animate_faster">W</span>
          <span className="headdingLetter">O</span>
          <span className="animate_fast">R</span>
          <span className="headdingLetter">K </span>
          <span className="headdingLetter">E</span>
          <span className="headdingLetter flicker_ani animate_fast">X</span>
          <span className="headdingLetter">P</span>
          <span className="headdingLetter flicker_ani animate_1s">E</span>
          <span className="headdingLetter flicker_ani animate_4s">R</span>
          <span className="headdingLetter flicker_ani animate_2s">I</span>
          <span className="headdingLetter flicker_ani animate_5s">E</span>
          <span className="headdingLetter flicker_ani animate_3s">N</span>
          <span className="headdingLetter flicker_ani animate_1s">C</span>
          <span className="headdingLetter flicker_ani animate_fast">E</span>
        </h1>

        <div className="position-relative container">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ prevEl: ".prevButton", nextEl: ".nextButton" }}
            centeredSlides={true}
            autoHeight={true}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: "-10%",
              depth: 100,
              modifier: 0.8,
              scale: 0.9,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className={`${styles.hSlider} `}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={`${styles.work}`}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        AKQA
                      </h2>
                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          <span className="font-shopify-bold-italic text-shopify me-1">
                            Shopify{" "}
                          </span>
                          Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Copenhagen ● Project-based ● Remote
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Aug 2025 - Nov 2025
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Enterprise Shopify development for global clients,
                        focusing on scalable custom themes and agile delivery.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>
                          Developed custom Shopify theme sections and pages.
                        </li>
                        <li>Collaborated in an agile environment.</li>
                        <li>Ensured high-quality code for QA processes.</li>
                        <li>Delivered reusable solutions.</li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">Section Architecture</span>
                        <span className="tag">Agile Development</span>
                        <span className="tag">Enterprise Delivery</span>
                        <span className="tag">Git</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#akqaModal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={styles.work}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        Planet-B
                      </h2>
                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          Senior{" "}
                          <span className="font-shopify-bold-italic text-shopify me-1">
                            Shopify{" "}
                          </span>
                          Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Brussels ● Full-time ● Remote
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Jul 2024 - Aug 2025
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Shopify development aligned with sustainability-driven
                        branding and growth-focused UX improvements.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>Developed custom themes and modular sections.</li>
                        <li>
                          Improved UX and revenue through feature enhancements.
                        </li>
                        <li>Integrated third-party apps.</li>
                        <li>
                          Educated internal teams on using custom-built CMS.
                        </li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">Team Enablement</span>
                        <span className="tag">Custom Themes</span>
                        <span className="tag">Cart Bundles</span>
                        <span className="tag">Metafields & Metaobjects</span>
                        <span className="tag">Dynamic Development</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#planetbModal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={styles.work}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        DE.CI
                      </h2>

                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          Senior{" "}
                          <span className="font-shopify-bold-italic text-shopify me-1">
                            Shopify{" "}
                          </span>
                          Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Cairo ● Part-time ● Remote
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Jul 2024 - Aug 2025
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Led the technical rebuild of a performance-critical
                        Shopify store for a fast-growing smart furniture
                        company.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>Identified UX and performance bottlenecks.</li>
                        <li>Developed complex yet maintainable sections.</li>
                        <li>
                          developed metafield + metaobject system to manage
                          materials and specifications.
                        </li>
                        <li>
                          Centralized product data into a scalable metaobject
                          database.
                        </li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">Performance Optimization</span>
                        <span className="tag">Complex Catalogs</span>
                        <span className="tag">Scalable CMS Systems</span>
                        <span className="tag">Metaobject Architecture</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#deciModal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={styles.work}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        Okhtein
                      </h2>

                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          <span className="font-shopify-bold-italic text-shopify me-1">
                            Shopify{" "}
                          </span>
                          Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Cairo ● Full-time ● On-site
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Sep 2023 - Jun 2024
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Shopify development for a high-end fashion brand with
                        complex product structures and premium UX requirements.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>
                          Translated design concepts into reusable section
                          plugins.
                        </li>
                        <li>
                          Architected Metafields & Metaobjects to support luxury
                          product variations.
                        </li>
                        <li>
                          Enabled rich product storytelling through flexible
                          CMS-driven layouts.
                        </li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">CMS Enablement</span>
                        <span className="tag">Custom Themes</span>
                        <span className="tag">Luxury E-commerce</span>
                        <span className="tag">Metafields & Metaobjects</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#okhteinModal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={styles.work}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        Selah El Telmeez
                      </h2>

                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          UI GAME /{" "}
                          <span className="font-shopify-bold-italic text-shopify me-1">
                            Shopify{" "}
                          </span>
                          Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Cairo ● Full-time ● On-site
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Jul 2022 - Aug 2023
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Hybrid role combining interactive UI development with
                        full Shopify implementation for educational products.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>
                          Built interactive canvas-based game experiences using
                          native JavaScript.
                        </li>
                        <li>
                          Delivered a complete Shopify store for educational
                          book sales.
                        </li>
                        <li>
                          Integrated shipping APIs (Egypt Post) and payment
                          gateway (Fawry).
                        </li>
                        <li>
                          Collaborated closely with product, marketing, and
                          design teams.
                        </li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">Canvas Animations</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">Shopify Full Setup</span>
                        <span className="tag">API Integrations</span>
                        <span className="tag">CMS Enablement</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#selahModal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={styles.work}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        Maison De Maa
                      </h2>

                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          <span className="font-shopify-bold-italic text-shopify me-1">
                            Shopify{" "}
                          </span>
                          Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Istanbul ● Full-time ● Remote
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Aug 2019 - May 2022
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Started as a junior web developer and evolved into a
                        Shopify Developer within a multi-brand holding company
                        managing fragrance and fashion subsidiaries.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>
                          Collaborated closely with design teams, CMS managers,
                          and a France-based Shopify team supporting fragrance
                          brands.
                        </li>
                        <li>
                          Participated in regular problem-solving and
                          brainstorming sessions to improve UX and resolve site
                          issues.
                        </li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">Shopify Liquid</span>
                        <span className="tag">Custom Themes</span>
                        <span className="tag">Cross-Team Collaboration</span>
                        <span className="tag">Multi-Brand Platforms</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#maisonModal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive }) => (
                <div
                  ref={isActive ? squareRef : null}
                  className={` ${isActive ? styles["custom-active-class"] + " " + styles.akqa : styles.akqa}`}
                >
                  <div
                    ref={isActive ? eyeballRef : null}
                    className={` ${styles.frame} ${isActive ? "glowRotate" : ""} `}
                  >
                    <div className={styles.work}>
                      <h2
                        className={` ${isActive ? " text-glow-blue" : ""}  headding-5 font-inconsolata ${styles.jobTitle}`}
                      >
                        El-youm 7
                      </h2>

                      <div className={``}>
                        <h3 className="headding-7 font-inconsolata ">
                          UI/UX Developer
                        </h3>

                        <div className={`font-inconsolata ${styles.location}`}>
                          Cairo ● Full-time ● On-site
                        </div>

                        <div className={`font-inconsolata ${styles.date}`}>
                          Sep 2018 - Jul 2019
                        </div>
                      </div>

                      <div className={`d-flex align-items-center mb-2 mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Overview
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <p className="font-monospace lh-base">
                        Frontend development for one of Egypt’s largest digital
                        news platforms, focused on performance, reusability, and
                        pixel-perfect UI execution.
                      </p>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0 text-nowrap flex-shrink-0`}
                        >
                          Key Contributions
                        </h5>
                        <div
                          className={`${styles.fadeDivider} flex-grow-1`}
                        ></div>
                      </div>
                      <ul className={`font-monospace lh-base mb-3`}>
                        <li>
                          Designed and produced reusable, maintainable frontend
                          code.
                        </li>
                        <li>
                          Improved page load times through performance-focused
                          UI development.
                        </li>
                        <li>Built an interactive, reusable news slider.</li>
                        <li>Delivered pixel-perfect implementations.</li>
                      </ul>

                      <div className={`d-flex align-items-center mb-2  mt-4`}>
                        <h5
                          className={`font-inconsolata text-light-blue headding-8 m-0  text-nowrap flex-shrink-0`}
                        >
                          Focus Areas
                        </h5>
                        <div className={`${styles.fadeDivider} `}></div>
                      </div>
                      <div className=" gap-2 d-flex flex-wrap mb-3">
                        <span className="tag">Media Platforms</span>
                        <span className="tag">Pixel-Perfect</span>
                        <span className="tag">government websites</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#Youm7Modal"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
          <div className={`prevButton ${styles.prevButton}`}>
            <i className="text-light-blue headding-7 fa-solid fa-chevron-left"></i>
          </div>

          <div className={`nextButton ${styles.nextButton}`}>
            <i className="text-light-blue headding-7 fa-solid fa-chevron-right"></i>
          </div>
        </div>

        {/* AKQA MODAL */}
        <div
          className="modal fade"
          id="akqaModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    AKQA Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    At AKQA, based in Copenhagen, Denmark, I worked as a
                    full-time remote Shopify Developer, focusing on developing
                    custom theme sections and pages.
                    <br />
                    <br />
                    In this role, I collaborated closely with the development
                    team in an agile environment, ensuring efficient workflows
                    and seamless product delivery.
                    <br />
                    My responsibilities included crafting tailored solutions
                    that met client specifications while maintaining high
                    standards of quality.
                    <br />
                    Working alongside QA and project management teams, I
                    contributed to a highly professional and coordinated
                    approach to project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planet-B MODAL */}
        <div
          className="modal fade"
          id="planetbModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    Planet-B Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    At Planet B in Belgium, I worked as a full-time Shopify
                    Developer, collaborating with the design, webmaster, and
                    marketing teams to create customizable sections aligned with
                    the company's vision for a{" "}
                    <span className="underline-light-blue">
                      plastic-free future.
                    </span>
                    <br />
                    <br />
                    My key responsibilities included
                    <span className="underline-light-purple">
                      testing and debugging code, developing custom themes, and
                      adding features to enhance user experience
                    </span>{" "}
                    and increase revenue.
                    <br />
                    <br />I also integrated third-party apps and optimized
                    stores for maximum efficacy. To ensure effective
                    implementation, I educated the webmasters on using my
                    custom-made sections to drive optimal results. My efforts,
                    including a dedicated website section promoting
                    sustainability campaigns, significantly boosted user
                    engagement and sales of eco-friendly products, reflecting my
                    passion for leveraging technology for positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DE.CI MODAL */}
        <div
          className="modal fade"
          id="deciModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    DE.CI Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    At DE.CI, a furniture company in Egypt known for its
                    innovative and smart furniture options gaining popularity, I
                    worked as a part-time Senior Shopify Developer,
                    collaborating closely with the product manager to manage
                    their Shopify platform. Upon joining, I assessed the
                    existing website and identified various performance issues
                    that affected the user experience, So we decided to remodel
                    the website by acquiring a new theme.
                    <br />
                    <br />
                    My primary focus was{" "}
                    <span className="underline-light-purple">
                      {" "}
                      developing complex yet maintainable and scalable Shopify
                      sections
                    </span>{" "}
                    that allowed CMS admins to efficiently manage the UI,
                    especially for seasonal events and diverse customer needs.
                    <br />
                    While working in furniture industry there were some unique
                    challenges, as its offered a{" "}
                    <span className="underline-light-purple">
                      wide range of products
                    </span>
                    , including tables, smart lazy boy chairs, antiques, coffee
                    tables, TV units, sofas, dining sets, bedrooms, and closets.
                    Each of these categories required careful representation of
                    various materials like metal, marble, and wood, leading me
                    to implement
                    <b className="highlight-box-light-blue">
                      Metafields and Metaobjects
                    </b>
                    .
                    <br />
                    <span className="underline-light-purple">
                      I've created a robust metafield system that connected to a
                      metaobject database, allowing store admins to define
                      product materials and characteristics easily.
                    </span>{" "}
                    Additionally, with DE.CI operating its own factory staffed
                    by engineers and workers, the integration of various
                    engineering technologies and mobile applications with the
                    smart furniture added complexity to product management. I
                    had to treat each product by gathering all the diverse
                    specifications and features into a sustainable,
                    maintainable, and
                    <span className="highlight-box-light-purple">
                      scalable metaobject database
                    </span>{" "}
                    linked to each product variant. This comprehensive system
                    streamlined the management of product variants and ensured a
                    user-friendly experience for Shopify admin editors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Okhtein MODAL */}
        <div
          className="modal fade"
          id="okhteinModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    Okhtein Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    Worked as a full time Shopify developer. My role is to
                    collaborate with the design team to understand end-user
                    requirements, then translate that into reusable, effactive
                    and scalable shopify section plugins.
                    <br />
                    <br />
                    Okhtein has multiple A-Class products like bags, belts,
                    jewlery and fashion, from this point I've expertly utilized
                    <b className="highlight-box-light-blue px-1 mx-1">
                      Metafields and Metaobjects
                    </b>{" "}
                    to tailor product displays for these products, facilitating
                    the inclusion of unique attributes that resonate with
                    high-end consumers.
                    <br />
                    <br />
                    This allowed for rich, detailed product presentations. Also
                    resposible for{" "}
                    <b className="underline-light-blue">educating</b> new CMS
                    manegers on how to use the Shopify and the new built custom
                    sections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selah EL-Telmeez MODAL */}
        <div
          className="modal fade"
          id="selahModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    Selah El-Telmeez Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    At Selah El Telmeez, I worked as a UI Game Developer and a
                    Shopify developer, creating interactive gaming experiences
                    through native JavaScript and canvas animation, translating
                    design concepts into functional interfaces. Concurrently, I
                    applied my previous Shopify expertise to build an e-commerce
                    platform for selling educational books to primary-stage
                    students in Egypt,{" "}
                    <span className="underline-light-purple">
                      handling all technical aspects of the Shopify
                      implementation
                    </span>
                    .
                    <br />
                    <br />
                    This involved brainstorming with the project managers,
                    marketing team, and UI/UX designers, as well as
                    collaborating with{" "}
                    <b className="highlight-box-light-blue px-1 mx-1">
                      "Egypt Post Office"
                    </b>{" "}
                    to integrate shipping and fulfillment APIs and partnering
                    with{" "}
                    <b className="highlight-box-light-blue px-1 mx-1">
                      "Fawry"
                    </b>{" "}
                    —a financial services provider operating across 166,500+
                    locations in Egypt— to implement their payment gateway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maison De Maa MODAL */}
        <div
          className="modal fade"
          id="maisonModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    Maison De Maa Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    Maison De Maa is a holding company managing over four
                    subsidiaries in Istanbul, Turkey I began as a junior web
                    developer before transitioning into a Shopify Developer
                    role.
                    <br />
                    <br />
                    There, I was first introduced to{" "}
                    <span className="underline-light-purple">
                      Shopify Liquid
                    </span>
                    , the server-side templating language. I collaborated
                    directly with design teams and CMS managers, as well as a
                    dedicated team in France responsible for two Shopify-based
                    fragrance brand websites. Together, we conducted regular
                    brainstorming sessions to address website issues, optimize
                    user experience, and implement strategic improvements.
                    Through hands-on training and cross-functional
                    collaboration,
                    <span className="underline-light-purple">
                      I grew into a reliable developer capable of independently
                      solving complex technical challenges
                    </span>{" "}
                    and facilitating solutions across Shopify — particularly
                    within the perfumes and fashion categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Youm-7 MODAL */}
        <div
          className="modal fade"
          id="Youm7Modal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className={`modal-dialog modal-dialog-centered`}>
            <div className={` ${styles.modalWrapper}`}>
              <div className={`modal-content  ${styles.codeframegrid}`}>
                <div className={`modal-header`}>
                  <h2
                    className={`text-blue-neon text-glow-blue modal-title fs-5`}
                  >
                    El-Youm-7 Details
                  </h2>
                  <button
                    type="button"
                    className={`text-light-blue btn-close`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="text-light-blue fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={`modal-body`}>
                  <p className="font-monospace mt-2 lh-base">
                    Worked as a UI/UX-focused frontend developer within a large
                    media, publishing, and printing organization supporting
                    high-traffic digital news platforms. My role involved
                    designing and developing reusable, maintainable UI
                    components while prioritizing performance, accessibility,
                    and long-term scalability across content-heavy pages that
                    serve a wide and diverse audience.
                    <br />
                    <br />
                    I engineered an interactive, reusable news slider to present
                    digital newspapers in a clear and engaging way, ensuring
                    smooth performance under high concurrent traffic. In
                    parallel, I contributed significantly to the development of
                    large-scale government websites, collaborating closely with
                    UX and UI designers to translate design systems into
                    precise, pixel-perfect implementations that met strict
                    visual and usability standards.
                    <br />
                    <br />
                    All deliverables were developed with a strong focus on
                    performance optimization, cross-browser consistency, and
                    clean code practices, ensuring reliable user experiences for
                    both public-facing platforms and mission-critical government
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
