import classes from "./Experience.module.scss";
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

const Experience = () => {
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
              <Titlepage text={"Experience"} />
              <div className={classes.heropage_message}>
                <motion.p
                  variants={messageAnimation}
                  animate="show"
                  exit="hide"
                >My Experiences
                  Software Engineer - Full Stack Developer  
                </motion.p>
              </div>
              <div className={classes.buttons}>
              {/* <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={classes.buttonLink}
                  href={"https://drive.google.com/file/d/1bDhiumn8nVoxXlftZUxPXu9Kda5XU5KI/view?usp=drive_link"}
                  download
                >
                  Download CV
                </motion.a> */}
                <Button
                  onClick={() => navigate("/portfolio")}
                  type="button"
                  buttonStyle="outline"
                >
                  My Projects
                </Button>
          
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
          <br />
          <motion.div
            variants={paragraphs}
            animate="show"
            exit="hide"
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide">
                E-Robot Software
            </motion.p>
            <span>Tunis - Tunisia  fullstack web developer 2023</span>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <br />
          <div className={classes.heropage_txt_container}>
            <motion.div
              variants={scaleAnim}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_text}
            >
 <ul>
  <li>Developed a custom online code editor, boosting startup efficiency with a 50% faster coding experience.</li>
  <li>Contributed to app architecture and design enhancements.</li>
  <li>Engineered Back‑End REST APIs using .NET 7, and Entity Framework.</li>
  <li>Crafted and implemented a UI with Angular.</li>
  <li>Optimized processing time by an impressive 40% through the implementation of cutting‑edge algorithms.</li>
  <li>Managed databases with SQL Server and SSMS, achieving a 30% reduction in data retrieval times.</li>
  <li>Conducted rigorous unit tests using xUnit, ensuring a 95% code coverage and debugging multiple API calls.</li>
  <li>Applied Agile methodologies (Scrum) in daily meetings with the startup’s founder and CEO.</li>
</ul>
<br/>

<p>Used technologies: C#, .Net, Angular, TypeScript, SQL Server, xUnit, UX/UI, Git , Github , Slack, Visual Studio</p>

            </motion.div>
            <motion.div
              variants={xAnimPos50}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_photo}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/exp/codeeditor.png`}
                alt="IrriApp"
              />
            </motion.div>
          </div>
          <br />
          <motion.div
            variants={paragraphs}
            animate="show"
            exit="hide"
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide">
          ZAtex
            </motion.p>
            <span>Tunis - Tunisia  Remote internship 2022</span>
            <div className={classes.heropage_line}></div>
          </motion.div>
       <br />
       <div className={classes.heropage_txt_container}>
            <motion.div
              variants={scaleAnim}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_text}
            >
<ul>
  <li>Contributed to the development of ’IrriApp,’ boosting agriculture field management efficiency by 25%.</li>
  <li>Engineered API endpoints using AWS Lambda and the Serverless Framework, achieving a 30% improvement in user data management.</li>
  <li>Innovated the user profile section with advanced features, elevating user interaction by 20%.</li>
  <li>Integrated Stripe payment methods, ensuring secure and efficient in‑app transactions.</li>
  <li>Implemented dynamic endpoints for swift user status changes, responding to payment alterations.</li>
</ul>
<br/>
<p>Used technologies: Angular, AWS Serverless Framework, AWS, AWS Lambda, AWS S3, AWS DynamoDb, Stripe, Git, GitLab, Slack, Visual Studio Code</p>

        
            </motion.div>
            <motion.div
              variants={xAnimPos50}
              animate="show"
              exit="hide"
              className={classes.heropage_txt_container_photo}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/exp/iriiapp.jpg`}
                alt="me"
              />
            </motion.div>
          </div>
        </section>
        <motion.section
          variants={backWords}
          animate="show"
          exit="hide"
          className={classes.background_text}
        >
          <h2>EXPER</h2>
          <h2>IENCE</h2>
        </motion.section>
      </motion.main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Experience;
