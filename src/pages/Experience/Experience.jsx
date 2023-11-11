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
                  href="./images/about/wassim-cv.pdf"
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
         <ul><li>Conceptualized and developed a web application, the ”Online Code Editor,” a dynamic code editing platform tailored for our company’s devel‑
opers. Built with a technology stack of .NET and Angular, this platform primarily supports the editing of C# .NET and Angular applications.</li>
         <li>Innovatively implemented API logic capable of managing multiple versions of a project, streamlining collaboration among development teams.
</li>
         <li>Pioneered the creation and implementation of an API that transformed conventional projects into SQL Server database projects, a paradigm
shift where real‑time databases replaced traditional files and folders, thus enhancing development efficiency.</li>
         <li>Spearheaded the implementation of advanced algorithms and data structures, optimizing multiple API endpoints to effortlessly manage
projects with substantial workloads.</li>
         <li>Developed and deployed a range of API endpoints, catering to project management, project versions, file and folder handling, and file content
manipulation.
</li>
<li>Crafted the user interface (UI) of the code editor, including a dynamic file explorer, context menus, and explorer toolbars, ensuring an intuitive
and user‑friendly experience.</li>
<li>Introduced a robust code editor for editing files, complemented by a user‑friendly context menu, enhancing the editing capabilities of develop‑
ers.</li>
<li>Implemented a code editor for editing files, complemented by a user‑friendly context menu, enhancing the editing capabilities of developers.</li>
<li>Built fully automated CI/CD pipelines on Azure DevOps, ensuring the smooth integration and deployment of our online editor</li></ul>
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
  <ul><li>Contributed to the development of ’IrriApp’, a robust SAAS platform for the agriculture industry. This platform allowed users to remotely manage
their fields.
</li><li>Leveraged AWS Lambda functions and the AWS Serverless Framework to create API endpoints for efficient user data management within Dy‑
namoDB and seamless data storage on AWS S3.</li>
<li>Designed and implemented a user profile section with various functionalities, including profile editing and password management.</li>
<li>Integrated Stripe payment methods, enabling users to make secure payments within the app.</li>
<li>Implemented endpoints for changing user statuses, such as ’Active’ or ’Blocked,’ based on their payment status.</li>
         </ul>
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
