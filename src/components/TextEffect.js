import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextEffect = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = document.querySelectorAll(".text");

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        TEXT EFFECT<span style={styles.span}>WOAH</span>
      </h1>
      <h1 style={styles.text}>
        GSAP<span style={styles.span}>AND CLIPPING</span>
      </h1>
      <h1 style={styles.text}>
        CRAZYYY<span style={styles.span}>CRAZYYY</span>
      </h1>
      <h1 style={styles.text}>
        HOVER ON ME
        <span style={styles.span}>
          <a
            href="https://stacksorted.com/text-effects/minh-pham"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            SOURCE
          </a>
        </span>
      </h1>
      <h1 style={styles.text}>
        LIKE THIS?
        <span style={styles.span}>
          <a
            href="https://twitter.com/juxtopposed"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            LET'S CONNECT
          </a>
        </span>
      </h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "200vh",
    backgroundColor: "#0D0D0D",
    margin: "10%",
  },
  text: {
    fontSize: "10vw",
    letterSpacing: "-.01em",
    lineHeight: "100%",
    margin: 0,
    width: "100%",
    color: "rgba(182, 182, 182, 0.2)",
    background: "linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "0%",
    transition: "background-size cubic-bezier(.1,.5,.5,1) 0.5s",
    borderBottom: "1px solid #2F2B28",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
  },
  span: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#4246ce",
    color: "#0D0D0D",
    clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
    transformOrigin: "center",
    transition: "all cubic-bezier(.1,.5,.5,1) 0.4s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};

export default TextEffect;