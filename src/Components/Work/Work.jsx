import React, { useRef } from "react";
import styles from "./Work.module.css";
import { useBootstrapTooltip } from "../../hooks/useBootstrapTooltip";

export default function Work() {
  const sectionRef = useRef(null);
  useBootstrapTooltip(sectionRef);

  return (
    <>
      <section id="experience" className={styles.experience} ref={sectionRef}>
        <h2 className="text-center glow fw-normal">Work Experience</h2>
        <div className={`${styles.experienceWrapper} my-4 d-flex flex-wrap`}>
          <div className={styles.column}>
            <div className="p-1 youm7">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    UI/UX Developer <br />
                    <span className={`${styles.jobTitle}`}>El-youm 7</span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    Sep/2018
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    Jul/2019
                  </span>
                  <p>
                    I was resposible of designing and producing reusable code,
                    reducing page load times, and employing a variety of markup
                    languages to create the web pages.
                    <br />
                    Made an interactive rusable news slider for the news
                    websites to present and display the digital newsparers, also
                    contributed in large part of making government websites in a
                    close team enviroment with a great pixel perfect
                    implementation along with the UX and UI Design Teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-1 selaheltelmeez">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    UI Game Developer /{" "}
                    <span className="shopify">Shopify </span>
                    Developer
                    <br />
                    <span className={` ${styles.jobTitle}`} data-text="Selah El Telmeez">
                      Selah El Telmeez
                    </span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    Jul/2022
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    Aug/2023
                  </span>
                  <p>
                    At Selah El Telmeez, I worked as a UI Game Developer and a
                    Shopify developer, creating interactive gaming experiences
                    through native JavaScript and canvas animation, translating
                    design concepts into functional interfaces. Concurrently, I
                    applied my previous Shopify expertise to build an e-commerce
                    platform for selling educational books to primary-stage
                    students in Egypt, <span className="underline-light-purple">handling all technical aspects of the
                    Shopify implementation</span>.
                    <br /> This involved brainstorming with the project managers,
                    marketing team, and UI/UX designers, as well as
                    collaborating with <b className="highlight-box-light-blue px-1 mx-1">"Egypt Post Office"</b> to integrate shipping
                    and fulfillment APIs and partnering with <b className="highlight-box-light-blue px-1 mx-1">"Fawry"</b> —a
                    financial services provider operating across 166,500+
                    locations in Egypt— to implement their payment gateway.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-1 PlanetB">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    <span className="shopify">Shopify</span> Developer
                    <br />
                    <span className={`${styles.jobTitle}`}>Planet-B</span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    Jul/2024
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    Aug/2025
                  </span>
                  <p>
                    At Planet B in Belgium, I worked as a full-time Shopify
                    Developer, collaborating with the design, webmaster, and
                    marketing teams to create customizable sections aligned with
                    the company's vision for a{" "}
                    <span className="underline-light-blue">
                      plastic-free future.
                    </span>
                    <br />
                    My key responsibilities included
                    <span className="underline-light-purple">
                      testing and debugging code, developing custom themes, and
                      adding features to enhance user experience
                    </span>{" "}
                    and increase revenue.
                    <br /> I also integrated third-party apps and optimized
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

            <div className="p-1 akqa">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    <span className="shopify">Shopify</span> Developer
                    <br />
                    <span className={`${styles.jobTitle}`}>AKQA</span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    Aug/2025
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    Nov/2025
                  </span>
                  <p>
                    At AKQA, based in Copenhagen, Denmark, I worked as a
                    full-time remote Shopify Developer, focusing on developing
                    custom theme sections and pages. In this role, I
                    collaborated closely with the development team in an agile
                    environment, ensuring efficient workflows and seamless
                    product delivery. My responsibilities included crafting
                    tailored solutions that met client specifications while
                    maintaining high standards of quality. Working alongside QA
                    and project management teams, I contributed to a highly
                    professional and coordinated approach to project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className="p-1 MaisonDeMaa">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    <span className="shopify">Shopify</span> Developer
                    <br />
                    <span className={`${styles.jobTitle}`}>Maison De Maa</span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    August/2019
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    May/2022
                  </span>
                  <p>
                    Maison De Maa is a holding company managing over four
                    subsidiaries in Istanbul, Turkey I began as a junior web
                    developer before transitioning into a Shopify Developer
                    role. There, I was first introduced to{" "}
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

            <div className="p-1 Okhtein">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    <span className="shopify">Shopify</span> Developer
                    <br />
                    <span className={`${styles.jobTitle}`}>Okhtein</span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    Sep/2023
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    Jun/2024
                  </span>
                  <p>
                    Worked as a full time Shopify developer. My role is to
                    collaborate with the design team to understand end-user
                    requirements, then translate that into reusable, effactive
                    and scalable shopify section plugins.
                    <br />
                    Okhtein has multiple A-Class products like bags, belts,
                    jewlery and fashion, from this point I've expertly utilized
                    <b className="highlight-box-light-blue px-1 mx-1">
                      Metafields and Metaobjects
                    </b>{" "}
                    to tailor product displays for these products, facilitating
                    the inclusion of unique attributes that resonate with
                    high-end consumers. This allowed for rich, detailed product
                    presentations. Also resposible for{" "}
                    <b className="underline-light-blue">educating</b> new CMS
                    manegers on how to use the Shopify and the new built custom
                    sections.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-1 DE.CI">
              <div className={styles.frame}>
                <div className={styles.work}>
                  <h3>
                    Senior <span className="shopify">Shopify</span> Developer
                    <br />
                    <span className={`${styles.jobTitle}`}>DE.CI</span>
                  </h3>
                  <span className={styles.date}>
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Started"
                      className="fa-solid fa-play"
                    ></i>{" "}
                    Jul/2024
                    <i
                      data-bs-toggle="tooltip"
                      data-bs-title="Ended"
                      className="fa-solid fa-forward-step ms-2"
                    ></i>{" "}
                    Aug/2025
                  </span>
                  <p>
                    At DE.CI, a furniture company in Egypt known for its
                    innovative and smart furniture options gaining popularity, I
                    worked as a part-time Senior Shopify Developer,
                    collaborating closely with the product manager to manage
                    their Shopify platform. Upon joining, I assessed the
                    existing website and identified various performance issues
                    that affected the user experience, So we decided to remodel
                    the website by acquiring a new theme. My primary focus was{" "}
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
                    . <br />
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
                    maintainable, and{" "}
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
      </section>
    </>
  );
}
