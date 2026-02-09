import React from "react";
import styels from "./Education.module.css";
import AOUImg from "../../assets/images/AOU_logo.png";
import OUImg from "../../assets/images/OU_logo.png";

export default function Education() {
  return (
    <>
      <section className={`container`}>
        <h1 className="text-center font-orbitron text-blue-neon text-glow-blue flicker_ani headding-3">
          <span className="headdingLetter flicker_ani animate_faster">E</span>
          <span className="headdingLetter animate_2s">D</span>
          <span className="animate_fast">U</span>
          <span className="headdingLetter">C</span>
          <span className="headdingLetter flicker_ani animate_fast">A</span>
          <span className="headdingLetter flicker_ani animate_1s">T</span>
          <span className="headdingLetter flicker_ani animate_2s">I</span>
          <span className="headdingLetter flicker_ani animate_1s">O</span>
          <span className="headdingLetter flicker_ani animate_fast">N</span>
        </h1>
        <div className={`${styels.education}`}>
          <div className={`row`}>
            <div className=" col-12 col-md-6 ">
              <div className={` glowRotate ${styels.frame} `}>
                <a
                  href="https://www.aou.edu.eg/Pages/default.aspx"
                  className="text-decoration-none text-normal"
                  target="_blank"
                >
                  <div className={styels.educationBlock}>
                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                      <div className={`${styels.educationLogo}`}>
                        <img className="img-fluid" src={AOUImg} />
                      </div>
                      <h2
                        className={`my-4 my-lg-2 headding-3 font-inconsolata `}
                      >
                        Arab Open University
                      </h2>
                    </div>

                    <div className="d-flex flex-column">
                      <div className={``}>
                        <h3 className="headding-5 font-inconsolata ">
                          Computer Science
                        </h3>
                        <div className={`font-inconsolata text-light-purple `}>
                          Cairo - Egypt
                        </div>
                        <div className={`font-inconsolata text-light-blue `}>
                          Bachelor's Degree
                        </div>
                        <div className={`font-inconsolata text-light-blue }`}>
                          Graduated in 12th June 2019
                        </div>
                      </div>

                      <p className="font-monospace mt-3 lh-base">
                        Earned a Bachelor's degree in computer Science with a
                        strong foundations in software engeneering, algorithms
                        and web development
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className=" col-12 col-md-6 ">
              <div className={`glowRotate ${styels.frame}`}>
                <a
                  href="https://www.open.ac.uk/"
                  className="text-decoration-none  text-normal"
                  target="_blank"
                >
                  <div className={styels.educationBlock}>
                    <div className="d-flex flex-column flex-lg-row  justify-content-center align-items-center">
                      <div className={`${styels.educationLogo}`}>
                        <img className="img-fluid" src={OUImg} />
                      </div>
                      <h2
                        className={`my-4 my-lg-2  headding-3 font-inconsolata `}
                      >
                        The Open University
                      </h2>
                    </div>

                    <div className="d-flex flex-column">
                      <div className={``}>
                        <h3 className="headding-5 font-inconsolata ">
                          Computer Science
                        </h3>
                        <div className={`font-inconsolata text-light-purple `}>
                          Cairo - Egypt
                        </div>
                        <div className={`font-inconsolata text-light-blue `}>
                          Bachelor's Degree
                        </div>
                        <div className={`font-inconsolata text-light-blue `}>
                          Graduated in 12th June 2019
                        </div>
                      </div>

                      <p className="font-monospace mt-3  lh-base">
                        Earned a Bachelor's degree in information techology and
                        computing with a strong foundations in software
                        engeneering, algorithms and web development
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
