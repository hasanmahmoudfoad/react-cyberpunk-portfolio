import React from "react";
import styels from "./ProjectsGrid.module.css";
import { useState } from "react";

import MaalthahabLogo from "../../assets/images/maalthahablogo.png";
import MaalthahabBg from "../../assets/images/maalthahb-bg.jpg";
import Maalthahab_video from "../../assets/videos/maalthahab_vid.mp4";

import MaisonMatineLogo from "../../assets/images/Maisonmatinelogo.jpg";
import MaisonMatineBg from "../../assets/images/maisonmatine-bg.jpg";
import MaisonMatine_video from "../../assets/videos/maisonmatine_vid.mp4";

import MajouriLogo from "../../assets/images/maojurilogo.jpg";
import MajouriBg from "../../assets/images/majouri-bg.jpg";
import Majouri_video from "../../assets/videos/majouri_vid.mp4";

import RadiashakerLogo from "../../assets/images/radia-logo.jpg";
import RadiashakerBg from "../../assets/images/radia-bg.jpg";
import Radiashaker_video from "../../assets/videos/radiashaker_vid.mp4";

import NikonLogo from "../../assets/images/nikonLogo.jpg";
import NikonBg from "../../assets/images/nikon-bg.png";
import Nikon_video from "../../assets/videos/nikon_vid.mp4";

import SelahLogo from "../../assets/images/selahlogo.png";
import SelahBg from "../../assets/images/selah-bg.webp";
import Selah_video from "../../assets/videos/selah_vid.mp4";

import OkhteinLogo from "../../assets/images/okhteinLogo.jpg";
import OkhteinBg from "../../assets/images/okhtein-bg.png";
import Okhtein_video from "../../assets/videos/okhtein_vid.mp4";

import BeindieLogo from "../../assets/images/brindielogo.png";
import BeindieBg from "../../assets/images/beindie-bg.png";
import Beindie_video from "../../assets/videos/beindie_vid.mp4";

import WondrLogo from "../../assets/images/WondrLogo.png";
import WondrBg from "../../assets/images/Wondr-bg.png";
import Wondr_video from "../../assets/videos/wondr_vid.mp4";

import BamboozeLogo from "../../assets/images/bamboozelogo.png";
import BamboozeBg from "../../assets/images/bambooze-bg.png";
// import Bambooze_video from "../../assets/videos/bambooze_vid.jpg";

import DeciLogo from "../../assets/images/decilogo.webp";
import DeciBg from "../../assets/images/deci-bg.jpg";
import Deci_video from "../../assets/videos/deci_vid.mp4";

import MoominLogo from "../../assets/images/moominLogo.webp";
import MoominBg from "../../assets/images/moomin-bg.webp";
import Moomin_video from "../../assets/videos/moominarabia_vid.mp4";

import PpLogo from "../../assets/images/pplogo.png";
import PpBg from "../../assets/images/pp-bg.png";
import Pp_video from "../../assets/videos/PP_vid.mp4";

import Shopify from "../../assets/images/shopify-Logo.png";
import ShopifyNeon2 from "../../assets/images/shopify_puple_neon.png";

export default function ProjectsGrid() {
  const projects = [
    {
      id: "moomin",
      projectName: "Moomin Arabia",
      projectLink: "https://www.moominarabia.com/en-gb/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Git",
        "Liquid",
        "JavaScript",
        "Tailwind",
      ],
      description:
        "Finnish Ceramic Objects decorated with children's patterns, toy tableware made for children have been part of Arabia's range throughout the factory's history. The first Moomin products joined the fold in the 1950s.",
      logoImg: MoominLogo,
      video: Moomin_video,
      imgFallback: MoominBg,
      logoCircled: false,
    },
    {
      id: "Wondr",
      projectName: "Wondr",
      projectLink: "https://wondr.planetb.care/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Git",
        "Liquid",
        "JavaScript",
        "Cart-API",
        "jQuery",
      ],
      description:
        "Wondr is a branded personal care and body products, such as shampoo bars, conditioner bars, shower bars, candles, and gift bundles.\n It’s part of a larger multi-brand shop ecosystem under the Planet B grouping",
      logoImg: WondrLogo,
      video: Wondr_video,
      imgFallback: WondrBg,
      logoCircled: false,
    },
    {
      id: "bambooze",
      projectName: "Bambzooze",
      projectLink: "https://bambooze.org/en/pages/personaliseer-jouw-rietjes",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Git",
        "Liquid",
        "JavaScript",
        "Cart-API",
        "jQuery",
      ],
      description:
        " Bambooze website, part of the Planet B brand focuses on eco-friendly and sustainable products, particularly bamboo-based items.",
      logoImg: BamboozeLogo,
      video: null,
      imgFallback: BamboozeBg,
      logoCircled: false,
    },
    {
      id: "okhtein",
      projectName: "Okhtein",
      projectLink: "https://eg.okhtein.com/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Git",
        "Liquid",
        "JavaScript",
        "jQuery",
        "App Intigration",
      ],
      description:
        "The OKHTEIN website features an elegant collection of designer bags, fine jewelry, and accessories, showcasing a blend of contemporary style and traditional craftsmanship.",
      logoImg: OkhteinLogo,
      video: Okhtein_video,
      imgFallback: OkhteinBg,
      logoCircled: false,
    },
    {
      id: "nikon",
      projectName: "Nikon (Bahrain)",
      projectLink: "https://nikonschool-bh.com/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        " Nikon Bahrain website serves as an official eCommerce platform for purchasing a wide range of cameras, lenses, and photography accessories.",
      logoImg: NikonLogo,
      video: Nikon_video,
      imgFallback: NikonBg,
      logoCircled: false,
    },
    {
      id: "deci",
      projectName: "DE.CI",
      projectLink: "https://deci-furniture.com/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        "The DE.CI Furniture website showcases a wide range of high-quality furniture designed for comfort and style. Specializing in ergonomic and timeless designs, the site features various categories including living, bedroom, dining, and outdoor furniture.",
      logoImg: DeciLogo,
      video: Deci_video,
      imgFallback: DeciBg,
      logoCircled: false,
    },
    {
      id: "beindie",
      projectName: "BE-Indie",
      projectLink: "https://be-indie.com/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        "Be-Indie is a fashion label that emphasizes a mix of trendy and timeless designs with an “edgy and rebellious” aesthetic. The philosophy centers around independence and experimentation in cuts, fabrics, prints and global influences.",
      logoImg: BeindieLogo,
      video: Beindie_video,
      imgFallback: BeindieBg,
      logoCircled: false,
    },
    {
      id: "selah",
      projectName: "Selah El-Telmeez",
      projectLink: "https://books.selaheltelmeez.net/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        "The Selah El-Telmeez website specializes in educational books for primary and kindergarten levels. It offers a range of materials categorized by grade, including the first through sixth grades and resources for preschool.",
      logoImg: SelahLogo,
      video: Selah_video,
      imgFallback: SelahBg,
      logoCircled: false,
    },
    {
      id: "majouri",
      projectName: "Majouri",
      projectLink: "https://majouri.com/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        "The MAJOURI website offers a luxurious selection of refillable perfumes crafted in France. It features a variety of fragrance collections categorized by olfactory notes.",
      logoImg: MajouriLogo,
      video: Majouri_video,
      imgFallback: MajouriBg,
      logoCircled: false,
    },
    {
      id: "maisonMatine",
      projectName: "Maison Matine",
      projectLink: "https://maisonmatine.com/en",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        "The Maison Matine website offers a range of unique perfumes and scented products, focusing on elegant and contemporary fragrance options.",
      logoImg: MaisonMatineLogo,
      video: MaisonMatine_video,
      imgFallback: MaisonMatineBg,
      logoCircled: true,
    },
    {
      id: "maalthahb",
      projectName: "Maa-Althahab",
      projectLink: "https://maa-althahab.com/",
      shopify: true,
      projectTechTags: [
        "Html",
        "CSS",
        "Bootstrap",
        "Liquid",
        "JavaScript",
        "jQuery",
      ],
      description:
        "The MAA ALTHAHAB website specializes in a wide range of perfumes and body fragrances. It features collections including OUD, SILK, and AURA, catering to both men and women.",
      logoImg: MaalthahabLogo,
      video: Maalthahab_video,
      imgFallback: MaalthahabBg,
      logoCircled: true,
    },
    {
      id: "radiaShaker",
      projectName: "Radia Shaker",
      projectLink: "https://radiashaker.com/",
      shopify: true,
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid", "JavaScript"],
      description:
        "Radia Shaker website is dedicated to offering a variety of stylish, hijab womenswear fashion outlets.",
      logoImg: RadiashakerLogo,
      video: Radiashaker_video,
      imgFallback: RadiashakerBg,
      logoCircled: false,
    },
    {
      id: "publicProsecution",
      projectName: "Public Prosecution ",
      projectLink: "https://ppo.gov.eg/ppo/r/ppoportal/ppoportal/home",
      shopify: false,
      projectTechTags: ["Html", "CSS", "Bootstrap", "Liquid", "JavaScript"],
      description:
        "The PPO (Public Procurement Office) website is the official portal for public procurement in Egypt. It provides access to essential information regarding procurement policies, regulations, and procedures.",
      logoImg: PpLogo,
      video: Pp_video,
      imgFallback: PpBg,
      logoCircled: true,
    },
  ];

  return (
    <>
      <section className="container-fluid">
        <h1 className="text-center font-orbitron text-blue-neon text-glow-blue flicker_ani headding-3">
          <span className="headdingLetter flicker_ani animate_faster">P</span>
          <span className="headdingLetter">R</span>
          <span className="headdingLetter animate_fast">O</span>
          <span className="headdingLetter">J</span>
          <span className="headdingLetter flicker_ani animate_fast">E</span>
          <span className="headdingLetter">C</span>
          <span className="headdingLetter flicker_ani animate_1s">T</span>
          <span className="headdingLetter flicker_ani animate_3s">S</span>
        </h1>

        <div className="container">
          <div className="row  mt-5">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="col-12  p-md-3 p-lg-4 col-md-6 col-lg-4"
              >
                <a href={project.projectLink} className="text-decoration-none" target="_blank">
                  <div className={`${styels.projectWrapper} `}>
                    { !project.video? <img src={project.imgFallback} className={`${styels.projectVideo}`} /> :  <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`${styels.projectVideo}`}
                    ></video> }
                    {project.shopify ? (
                      <div className={`${styels.shopifyLogo} `}>
                        <div className="position-relative">
                          <img
                            src={ShopifyNeon2}
                            className={`${styels.shopifyNeon2} img-fluid`}
                          />
                          <img
                            src={Shopify}
                            className={`${styels.shopifyOriginal} img-fluid`}
                          />
                        </div>
                      </div>
                    ) : null}
                    <div className={` p-3 ${styels.codeframegrid}`}>
                      <div className="d-flex align-items-center">
                        <div
                          className={`${styels.projectLogo} ${project.logoCircled ? "rounded-circle" : null}`}
                        >
                          <img src={project.logoImg} className="img-fluid" />
                        </div>
                        <h3
                          className={`text-normal headding-8 font-orbitron  ${styels.projectTitle}`}
                        >
                          {project.projectName}
                        </h3>
                      </div>
                      <div
                        className={` pt-4 pb-2 text-normal  ${styels.projectDiscription} `}
                      >
                        {project.description}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
