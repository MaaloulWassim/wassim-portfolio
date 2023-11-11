import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/wassimmaaloul/"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + `/images/links/linkedin.png`}
          alt="linkedin"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/MaaloulWassim"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + `/images/links/github.png`}
          alt="github"
        />
      </a>
      <Link
        onClick={() =>
          (window.location = "mailto:wassim.maaloul@outlook.com")
        }
      >
        <img
          src={process.env.PUBLIC_URL + `/images/links/email.png`}
          alt="email"
        />
      </Link>
    </>
  );
};
