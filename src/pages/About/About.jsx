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
                  // href={"""}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={() =>
                    openPopup(""
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
              Hello! I'm Wassim, a 26-year-old Software Engineer and Full-Stack Developer originally from Tunisia and currently based in Germany. I hold a Master's Degree in Software Engineering (National Engineer Diploma) and am actively seeking exciting job opportunities where I can apply my skills and grow as a professional.
              </p>

              <p>
              I am fluent in both English and French, with a solid foundation in German (Level B1 currently) that I am continuously improving. With over a year of hands-on experience in developing, testing, and delivering robust solutions across multiple programming languages—including C#, Python, Java, and TypeScript—I am passionate about building high-quality software that solves real-world problems.
              </p>

              <p>
              My professional interests are diverse, spanning web development, cloud architecture, and emerging technologies like Web3 and blockchain. I am driven by a desire to stay at the forefront of technology and contribute to innovative, impactful projects.
              </p>
              <p>Outside of work, I have a strong passion for 3D animation and graphic design. I also enjoy a variety of hobbies, including listening to music, playing football, boxing, and even performing magic tricks. These interests fuel my creativity and keep me energized, both in and out of the workplace.</p>
              <p>I am eager to bring my expertise to innovative teams and am open to exploring new opportunities in the dynamic field of software development.</p>
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
