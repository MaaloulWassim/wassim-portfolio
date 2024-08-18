import classes from "./About.module.scss";
import React, { useState ,useEffect} from "react";
import Footer from "../../components/Footer/Footer";
// import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import {
  h3Animation,
  messageAnimation,
  paragraphs,
  work,
  backWords,
  opacityPage,
  scaleAnim,
  xAnimPos50,
} from "../../Animations/Animations";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import { Titlepage } from "../../components/Titlepage/Titlepage";
import { Links } from "../../components/Links/Links";
import BackToTop from "../../components/BackToTop/BackToTop";
import { Document, Page, pdfjs } from "react-pdf";

const About = () => {

  const navigate = useNavigate();
  const openPopup = (url, width, height) => {
    if (!url) {
      return;
    }

    // Define the dimensions of the popup window (width and height).
    width = width || 600; // You can set default values here.
    height = height || 400;

    // Calculate the center position of the screen.
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Open the popup window with specified dimensions and position.
    const win = window.open(
      url,
      '_blank',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // Focus on the popup window.
    if (win) {
      win.focus();
    }
  };

  return (
    <>
      <motion.main
        variants={opacityPage}
        animate="show"
        exit="hide"
        className={classes.hero_page_wrapper}
      >
        <section className={classes.heropage}>
          <div className={classes.heropage_content}>
            <div className={classes.heropage_content_wrapper}>
              <Titlepage text={"About"} />
              <div className={classes.heropage_message}>
                <motion.p
                  variants={messageAnimation}
                  animate="show"
                  exit="hide"
                >
                  About Me.
                </motion.p>
              </div>
              <div className={classes.buttons}>
                <Button
                  onClick={() =>
                    (window.location = "mailto:wassim.maaloul@outlook.com")}
                  type="button"
                  buttonStyle="outline"
                >
                  Contact Me
                </Button>

                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={classes.buttonLink}
                  // href={"https://drive.google.com/file/d/19TBCX1tOiGI5QN_AFovTrE-66d6p7RhK/view?usp=drive_link"}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() =>
                    openPopup("https://drive.google.com/file/d/1-jIOIe83-_Zt7vwhvvbtZIxYxPuDcPoa/view?usp=drive_link"
                        ,
                      800,
                      600
                    )
                  }
                 
                >
                  Download CV
                </motion.a>
              </div>
            </div>

            {/* links  */}
            <motion.div
              variants={h3Animation}
              animate="show"
              exit="hide"
              className={classes.heropage_links}
            >
              <Links />
            </motion.div>
          </div>
          <div className={classes.heropage_txt_container}>
            <motion.div
              variants={scaleAnim}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_text}
            >
              <p>
               My name is Wassim Maaloul, a 26-year-old Software Engineer and Full Stack Developer from Tunisia.
               I hold a masters's degree in Software Engineering (National Engineer Diploma) 
               and am currently based in Schmalkalden Germany, actively seeking job opportunities.
              </p>

              <p>
              Proficient in English (C1) , as well as German (A2 and currently learning), French (B2),  and Arabic (native),
               with over a year of experience in developing, testing, and delivering robust solutions across multiple programming languages, including C#, Python, and TypeScript. Eager to continuously enhance skills and contribute to innovative projects.

              </p>

              <p>
              My professional interests span a wide spectrum, including web development, cloud architecture, web3 and blockchain development. Beyond the tech realm, I'm also passionate about 3D animation, graphic design, and indulge in hobbies like listening to music, football, boxing, and even performing magic tricks. 
              </p>
              <p>Eager to apply my skills and contribute to innovative projects, I am open to exploring exciting job opportunities in the dynamic field of software development.</p>
            </motion.div>
            <motion.div
              variants={xAnimPos50}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_photo}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/about/IMG_E1420cv.png`}
                alt="me"
              />
            </motion.div>
          </div>
          {/* <div className={classes.cv_section}>
        <Titlepage text={"Curriculum Vitae"} />
     
      </div> */}
          <motion.div
            variants={paragraphs}
            animate="show"
            exit="hide"
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide">
            <Button
              onClick={() => navigate("/portfolio")}
              type="button"
              buttonStyle="outline"
            >
              View my work
            </Button>
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <motion.div
            variants={h3Animation}
            animate="show"
            exit="hide"
            className={classes.heropage_links_bottom}
          >
            <Links
              onClick={() =>
                (window.location = "mailto:wassim.maaloul@outlook.com")
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/images/links/email.png`}
                alt="email"
              />
            </Links>
          </motion.div>
        </section>
        <motion.section
          variants={backWords}
          animate="show"
          exit="hide"
          className={classes.background_text}
        >
          <h2>ABO</h2>
          <h2>UT</h2>
        </motion.section>
      </motion.main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default About;
