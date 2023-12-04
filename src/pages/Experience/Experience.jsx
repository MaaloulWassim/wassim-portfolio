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
              <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={classes.buttonLink}
                  href={"https://drive.google.com/file/d/1QIIh8VCRRXmvr1gkDjEkFixpEDQfQQ8-/view?usp=drive_link"}
                  download
                >
                  Download CV
                </motion.a>
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
            <span>Tunis - Tunisia  Remote internship 2023</span>
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
         <ul><li>Developed the 'Online Code Editor', a dynamic platform tailored for our developers using .NET and Angular, specializing in C# .NET and Angular application editing.</li>
         <li>Innovated API logic to manage project versions, fostering efficient collaboration within development teams.</li>
         <li>Pioneered an API transforming conventional projects into SQL Server database projects, marking a shift to real-time databases for heightened development efficiency. </li>
         <li>Spearheaded advanced algorithm implementation, optimizing multiple API endpoints for seamless project handling with substantial workloads.</li>
         <li>Crafted an intuitive UI for the code editor, featuring a dynamic file explorer and user-friendly context menus.</li>
         <li>Introduced a robust code editor and implemented user-friendly context menus, enhancing developers' editing capabilities.</li>
         <li>Designed and deployed diverse API endpoints for project management, versions, file and folder operations, and content manipulation.</li>
</ul>
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
          Zone Atex
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
  <ul><li>Contributed to the development of 'IrriApp,' a robust SAAS platform revolutionizing agriculture field management.</li>
  <li>Utilized AWS Lambda functions and the AWS Serverless Framework to establish efficient API endpoints for seamless user data management within DynamoDB and secure data storage on AWS S3. </li>
  <li>Engineered a comprehensive user profile section with diverse functionalities, encompassing profile editing and password management.</li>
  <li>Integrated Stripe payment methods to facilitate secure transactions within the application.</li>
  <li> Implemented endpoints for dynamic user status changes, responding to payment status alterations, such as transitioning between 'Active' and 'Blocked' states.
</li></ul>
        
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
