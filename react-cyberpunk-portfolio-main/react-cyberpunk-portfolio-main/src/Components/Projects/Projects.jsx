import React from "react";
import styels from "./Projects.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MaalthahabLogo from "../../assets/images/maalthahablogo.png";
import MaalthahabBg from "../../assets/images/maalthahb-bg.jpg";
import MaisonMatineLogo from "../../assets/images/Maisonmatinelogo.jpg";
import MaisonMatineBg from "../../assets/images/maisonmatine-bg.jpg";
import MajouriLogo from "../../assets/images/maojurilogo.jpg";
import MajouriBg from "../../assets/images/majouri-bg.jpg";
import RadiashakerLogo from "../../assets/images/radia-logo.jpg";
import RadiashakerBg from "../../assets/images/radia-bg.jpg";
import NikonLogo from "../../assets/images/nikonLogo.jpg";
import NikonBg from "../../assets/images/nikon-bg.png";
import SelahLogo from "../../assets/images/selahlogo.png";
import SelahBg from "../../assets/images/selah-bg.webp";
import OkhteinLogo from "../../assets/images/okhteinLogo.jpg";
import OkhteinBg from "../../assets/images/okhtein-bg.png";
import BeindieLogo from "../../assets/images/brindielogo.png";
import BeindieBg from "../../assets/images/beindie-bg.png";
import WondrLogo from "../../assets/images/WondrLogo.png";
import WondrBg from "../../assets/images/Wondr-bg.png";
import BamboozeLogo from "../../assets/images/bamboozelogo.png";
import BamboozeBg from "../../assets/images/bambooze-bg.png";
import DeciLogo from "../../assets/images/decilogo.webp";
import DeciBg from "../../assets/images/deci-bg.jpg";
import MoominLogo from "../../assets/images/moominLogo.webp";
import MoominBg from "../../assets/images/moomin-bg.webp";
import PpLogo from "../../assets/images/pplogo.png";
import PpBg from "../../assets/images/pp-bg.png";
import Shopify from "../../assets/images/shopify-Logo.png";
import gsap from "gsap";




export default function Projects() {
  const squareRef = useRef(null);
  const eyeballRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: "moomin",
      projectName: "Moomin Arabia (Filand)",
      projectLink: "https://www.moominarabia.com/en-gb/",
      projectTechTags: ["Html", "CSS", "Git", "Liquid", "JavaScript", "Tailwind"],
      title: "Moomin Arabia — Finland",
      subtitle: "Enterprise-level themes & scalable components",
      logoImg: MoominLogo,
      bgImg: MoominBg,
    },
    {
      id: "pp",
      projectName: "Public Prosecution",
      projectLink: "https://ppo.gov.eg/ppo/r/ppoportal/ppoportal/home",
      projectTechTags: ["Html", "CSS", "Git",  "JavaScript", "Tailwind"],
      title: "Public Prosecution",
      subtitle: "Enterprise-level themes & scalable components",
      logoImg: PpLogo,
      bgImg: PpBg,
    },
    {
      id: "Wondr",
      projectName: "Wondr",
      projectLink: "https://wondr.planetb.care/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Git", "Liquid",  "JavaScript", "Cart-API", "jQuery"],
      title: "Wondr — Plastic free World",
      subtitle: "Branding and growth-focused",
      logoImg: WondrLogo,
      bgImg: WondrBg,
    },
    {
      id: "bambooze",
      projectName: "Bambzooze",
      projectLink: "https://bambooze.org/en/pages/personaliseer-jouw-rietjes",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Git", "Liquid",  "JavaScript", "Cart-API", "jQuery"],
      title: "Bambzooze — Plastic free World",
      subtitle: "Branding and growth-focused",
      logoImg: BamboozeLogo,
      bgImg: BamboozeBg,
    },
    {
      id: "okhtein",
      projectName: "Okhtein",
      projectLink: "https://eg.okhtein.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Git", "Liquid",  "JavaScript", "jQuery", "App Intigration"],
      title: "OKHTEIN — Luxury Commerce",
      subtitle: "Metafield-driven product architecture",
      logoImg: OkhteinLogo,
      bgImg: OkhteinBg,
    },
    {
      id: "nikon",
      projectName: "Nikon (Bahrain)",
      projectLink: "https://nikonschool-bh.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "Nikon — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: NikonLogo,
      bgImg: NikonBg,
    },
    {
      id: "deci",
      projectName: "DE.CI",
      projectLink: "https://deci-furniture.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "DE.CI — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: DeciLogo,
      bgImg: DeciBg,
    },
    {
      id: "beindie",
      projectName: "BE-Indie",
      projectLink: "https://be-indie.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "BE-Indie — Fashion",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: BeindieLogo,
      bgImg: BeindieBg,
    },
    {
      id: "selah",
      projectName: "Selah El-Telmeez",
      projectLink: "https://books.selaheltelmeez.net/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "BE-Indie — Fashion",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: SelahLogo,
      bgImg: SelahBg,
    },
    {
      id: "majouri",
      projectName: "Majouri",
      projectLink: "https://majouri.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "Majouri — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: MajouriLogo,
      bgImg: MajouriBg,
    },
    {
      id: "maisonMatine",
      projectName: "Maison Matine",
      projectLink: "https://maisonmatine.com/en",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "Maison Matine — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: MaisonMatineLogo,
      bgImg: MaisonMatineBg,
    },
    {
      id: "maalthahb",
      projectName: "Maa-Althahab",
      projectLink: "https://maa-althahab.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript", "jQuery"],
      title: "Maa-Althahab — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: MaalthahabLogo,
      bgImg: MaalthahabBg,
    },
    
    {
      id: "radiaShaker",
      projectName: "Radia Shaker",
      projectLink: "https://radiashaker.com/",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript"],
      title: "Radia Shaker — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: RadiashakerLogo,
      bgImg: RadiashakerBg,
    },
    
    {
      id: "publicProsecution",
      projectName: "Public Prosecution ",
      projectLink: "https://ppo.gov.eg/ppo/r/ppoportal/ppoportal/home",
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid",  "JavaScript"],
      title: "Radia Shaker — Smart Furniture Platform",
      subtitle: "Complex CMS systems & performance audits",
      logoImg: PpLogo,
      bgImg: PpBg,
    }
  ];

  useEffect(() => {
    const handleMouseMove = (event) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      if (squareRef.current) {
        squareRef.current.style.transform = `translate(${posX * 0.003}%, ${posY * 0.003}%)`;
      }

      if (eyeballRef.current) {
        eyeballRef.current.style.transform = `translate(${posX * 0.008}%, ${posY * 0.008}%)`;
      }
    };
     gsap.fromTo(
    ".slide-text",
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.4 }
  );

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeIndex]);

  return (
    <>
      <section className="container-fluid">
        <h1 className="text-center font-neon text-blue-neon text-glow-blue flicker_ani headding-2">
          <span className="flicker_ani animate_faster">P</span>R
          <span className="animate_fast">O</span>J
          <span className="flicker_ani animate_fast">E</span>C
          <span className="flicker_ani animate_1s">T</span>
          <span className="flicker_ani animate_3s">S</span>
        </h1>

        <div className="container">
          <div className="row mt-5">
            <div className="col-8">
              <div className={`${styels.vSliderContainer} position-relative  `}>
                <Swiper
                  // install Swiper modules
                  modules={[
                    Navigation,
                    Pagination,
                    EffectCoverflow,
                    A11y,
                    Mousewheel,
                  ]}
                  a11y={{ id: "SWSWSWSWSWSWSWSW" }}
                  direction={"vertical"}
                  effect={"coverflow"}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation={{ prevEl: ".prevButton", nextEl: ".nextButton" }}
                  pagination={{ clickable: true, el: ".vSwiperPagination" }}
                  centeredSlides={true}
                  mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                  }}
                  coverflowEffect={{
                    rotate: -20,
                    stretch: "20%",
                    depth: 200,
                    modifier: 0.8,
                    scale: 0.9,
                    slideShadows: false,
                  }}
                  className={`${styels.vSlider} `}
                  onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                  }}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                      {({ isActive }) => (
                        <div  className={` ${isActive ? styels["custom-active-class"] : ""}`}>
                          <div className={` ${styels.frame} ${isActive ? "glowRotate" : ""} `}>
                            <div className={`${styels.project} position-relative`} >
                              <h2 className={` ${isActive ? " text-glow-blue" : ""}  headding-8 font-inconsolata ${styels.projectTitle}`} >
                                {/* {slide.projectName} */}
                              </h2>
                              <div ref={isActive ? squareRef : null} 
                              className={`${styels.projectBgImgWrapper}`}>  
                                <div className={` ${!isActive ? styels.projectBgImgWrapperShade : ""} `}></div>
                                <img src={slide.bgImg} className={`w-100 img-fluid ${styels.projectBgImg}`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* <div className={`prevButton ${styels.prevButton}`}>
            <i  className="text-light-blue headding-7 fa-solid fa-chevron-down"></i>
          </div>

          <div className={`nextButton ${styels.nextButton}`}>
            <i className="text-light-blue headding-7 fa-solid fa-chevron-up"></i>
          </div> */}

                <div
                  className={`vSwiperPagination ${styels.vSwiperPagination}`}
                ></div>
              </div>
            </div>

            <div className="col-4 d-flex flex-column justify-content-center">
            <div className="d-flex ">
              <div className={styels.projectLogo}>
                <img src={slides[activeIndex].logoImg} className="img-fluid w-75 m-auto" />
              </div>
              <h2 className="text-center font-neon text-blue-neon text-glow-blue headding-6 mt-5">
                {slides[activeIndex].title}
              </h2>

            </div>
            
              <p className="text-center opacity-75 mt-2">
                {slides[activeIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
