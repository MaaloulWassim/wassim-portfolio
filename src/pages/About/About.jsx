import classes from "./About.module.scss";
import Footer from "../../components/Footer/Footer";

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

const About = () => {
  const navigate = useNavigate();
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
                  onClick={() => navigate("/contact")}
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
                  href="./images/about/wassim-cv.pdf"
                  download
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
                My name is Wassim Maaloul 25 years old from Tunisia, I am a Software Engineer and
                Full stack Developer. I have a bachelor degree in software engineering (National Engineer Diploma). I
                speak arabic (maternal language), english, french and German.
              </p>

              <p>
              I have completed two internships as a software engineer, one in 2022 for 2 months, and the most recent one in 2023 for 6 months in Tunis, Tunisia. 

              </p>

              <p>
                My passions are: web development, software development, cloud architecture, web3 and blockchain development, 3D animation, graphic design,
                 cinema, manga, listen to music, football, boxing and
                magic tricks.
              </p>
            </motion.div>
            <motion.div
              variants={xAnimPos50}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_photo}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/about/wassimaout.png`}
                alt="me"
              />
            </motion.div>
          </div>
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
