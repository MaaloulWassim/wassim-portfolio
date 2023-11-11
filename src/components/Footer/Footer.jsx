import classes from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={classes.footer_full}
    >
      <section className={classes.footer}>
        <div className={classes.footer_name}>
          <h4>Wassim Maaloul</h4>
          <span>Software Engineer - Full Stack Developer</span><br />
          {/* <span>.Net - Node.Js - MERN/MEAN Stack</span> */}
        </div>
        <div className={classes.footer_copyright}>
          <span>&#169; </span> 2023 developed by Wassim Maaloul
        </div>
        <div className={classes.footer_email}>wassim.maaloul@outlook.com</div>
      </section>
    </motion.footer>
  );
};

export default Footer;
