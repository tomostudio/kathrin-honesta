import { graphql } from "gatsby";
import React, { useEffect, useRef } from "react";
import MainLayout from "../components/layout/mainLayout";
import * as styles from "../styles/modules/projects.module.scss";
import NavScroll from "../components/navScroll";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useAppContext } from "../context/store";

const ProjectsPage = ({ data }) => {
  const contentRef = useRef();
  const context = useAppContext();
  let heightMain, heightMain2, heightMain3;

  const transitionProjects = () => {
    const main = document.getElementsByClassName("tes")[0].children;
    const height = main[1].clientHeight;
    const height2 = main[2].clientHeight;
    const height3 = main[3].clientHeight;

    main[1].children[0].children[0].style.transform = `translateY(-${
      (height * 2) / 2
    }px)`;
    main[1].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height / 25
    )}px)`;
    main[1].children[0].children[0].style.opacity = 0;

    main[2].children[0].children[0].style.transform = `translateY(-${
      (height2 * 2) / 2
    }px)`;
    main[2].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height2 / 25
    )}px)`;
    main[2].children[0].children[0].style.opacity = 0;

    main[3].children[0].children[0].style.transform = `translateY(-${
      (height3 * 2) / 2
    }px)`;
    main[3].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height3 / 25
    )}px)`;
    main[3].children[0].children[0].style.opacity = 0;

    main[4].children[0].style.transform = `translateY(-${height3 / 2}px)`;
    main[4].children[0].style.opacity = 0;

    heightMain = main[1].getBoundingClientRect().height;
    heightMain2 = main[2].getBoundingClientRect().height;
    heightMain3 = main[3].getBoundingClientRect().height;

    const currentScroll = window.pageYOffset;
    let transform = 0;

    transform = Math.min(Math.abs(main[0].getBoundingClientRect().top), 25);
    main[0].children[0].style.transform = `translateY(-${Math.min(
      transform,
      25
    )}px)`;

    let opacity;
    let opacity3;
    if (
      currentScroll <= Math.ceil(main[0].getBoundingClientRect().height / 20)
    ) {
      opacity =
        1 - currentScroll / (main[0].getBoundingClientRect().height / 25);
      opacity3 = currentScroll / (main[0].getBoundingClientRect().height / 10);
    } else {
      opacity = 0;
    }
    main[0].children[0].style.opacity = `${opacity}`;
    main[1].children[0].children[0].style.opacity = `${opacity3}`;

    if (transform === 25) {
      //Opacity
      let opacity2;
      let opacity4;

      if (
        Math.abs(main[1].getBoundingClientRect().top - (heightMain - 25)) <=
        Math.ceil(main[1].getBoundingClientRect().height / 2)
      ) {
        opacity2 =
          1 -
          Math.abs(main[1].getBoundingClientRect().top - (heightMain - 25)) /
            (main[1].getBoundingClientRect().height / 2.5);
        opacity4 = Math.min(
          Math.abs(main[1].getBoundingClientRect().top - (heightMain - 25)) /
            (main[1].getBoundingClientRect().height / 5),
          1
        );
      } else {
        opacity2 = 0;
      }
      if (opacity2 <= 0) {
        main[1].children[0].children[0].style.opacity = 0;
      } else {
        main[1].children[0].children[0].style.opacity = `${opacity2}`;
      }
      main[1].children[0].children[1].style.opacity = `${opacity4}`;

      //TranslateY
      main[1].children[0].children[1].style.transform = `translateY(-${
        Math.ceil(height / 25) +
        Math.abs(main[1].getBoundingClientRect().top - (heightMain - 25))
      }px)`;
    }

    if (main[1].children[0].children[1].getBoundingClientRect().top <= 0) {
      //Opacity
      let opacity6, opacity7, opacity8;

      if (
        Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25)) <=
        Math.ceil(main[2].getBoundingClientRect().height / 2)
      ) {
        opacity6 =
          1 -
          Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25)) /
            (main[2].getBoundingClientRect().height / 2.5);
        opacity7 = Math.min(
          Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25)) /
            (main[2].getBoundingClientRect().height / 5),
          1
        );
      } else {
        opacity6 = 0;
      }
      if (opacity6 <= 0) {
        main[2].children[0].children[0].style.opacity = 0;
      } else {
        main[2].children[0].children[0].style.opacity = `${opacity6}`;
      }
      opacity8 =
        Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25)) /
          (main[2].getBoundingClientRect().height / 5) -
        1;
      if (opacity8 <= 1) {
        if (opacity8 <= 0) {
          main[1].children[0].children[1].style.opacity = 0;
        } else {
          main[1].children[0].children[1].style.opacity = `${opacity8}`;
        }
      }
      main[2].children[0].children[1].style.opacity = `${opacity7}`;

      //TranslateY
      main[2].children[0].children[1].style.transform = `translateY(-${
        Math.ceil(height2 / 25) +
        Math.abs(main[2].getBoundingClientRect().top - (heightMain2 - 25))
      }px)`;
    }

    if (main[2].children[0].children[1].getBoundingClientRect().top <= 0) {
      //Opacity
      let opacity9, opacity10, opacity11;

      if (
        Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) <=
        Math.ceil(main[3].getBoundingClientRect().height / 2)
      ) {
        opacity9 =
          1 -
          Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
            (main[3].getBoundingClientRect().height / 2.5);
        opacity10 = Math.min(
          Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
            (main[3].getBoundingClientRect().height / 5),
          1
        );
      } else {
        opacity9 = 0;
      }
      if (opacity9 <= 0) {
        main[3].children[0].children[0].style.opacity = 0;
      } else {
        main[3].children[0].children[0].style.opacity = `${opacity9}`;
      }
      opacity11 =
        Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
          (main[3].getBoundingClientRect().height / 5) -
        1;
      if (opacity11 <= 1) {
        if (opacity11 <= 0) {
          main[2].children[0].children[1].style.opacity = 0;
        } else {
          main[2].children[0].children[1].style.opacity = `${opacity11}`;
        }
      }
      main[3].children[0].children[1].style.opacity = `${opacity10}`;

      // TranslateY
      main[3].children[0].children[1].style.transform = `translateY(-${
        Math.ceil(height3 / 25) +
        Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25))
      }px)`;
    }

    if (main[3].children[0].children[1].getBoundingClientRect().top <= 0) {
      //Opacity
      let opacity10;

      opacity10 =
        Math.abs(main[3].getBoundingClientRect().top - (heightMain3 - 25)) /
          (main[3].getBoundingClientRect().height / 5) -
        3;
      main[4].children[0].style.opacity = `${Math.min(opacity10, 1)}`;

      if (1 - opacity10 <= 0) {
        main[3].children[0].children[1].style.opacity = 0;
      } else {
        main[3].children[0].children[1].style.opacity = `${1 - opacity10}`;
      }
    }
  };

  useEffect(() => {
    let mobile = false;
    if (window.innerWidth <= 576) {
      mobile = true;
    } else {
      mobile = false;
    }

    window.addEventListener(
      "resize",
      () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        if (window.innerWidth <= 576) {
          mobile = true;
          const main = document.getElementsByClassName("tes")[0].children;

          main[0].children[0].removeAttribute("style");
          main[1].children[0].children[0].removeAttribute("style");
          main[1].children[0].children[1].removeAttribute("style");
          main[2].children[0].children[0].removeAttribute("style");
          main[2].children[0].children[1].removeAttribute("style");
          main[3].children[0].children[0].removeAttribute("style");
          main[3].children[0].children[1].removeAttribute("style");
          main[4].children[0].removeAttribute("style");

          window.removeEventListener("scroll", transitionProjects, false);
        } else {
          mobile = false;
          const main = document.getElementsByClassName("tes")[0].children;
          const height = main[1].clientHeight;
          const height2 = main[2].clientHeight;
          const height3 = main[3].clientHeight;

          main[1].children[0].children[0].style.transform = `translateY(-${
            (height * 2) / 2
          }px)`;
          main[1].children[0].children[1].style.transform = `translateY(-${Math.ceil(
            height / 25
          )}px)`;
          main[1].children[0].children[0].style.opacity = 0;

          main[2].children[0].children[0].style.transform = `translateY(-${
            (height2 * 2) / 2
          }px)`;
          main[2].children[0].children[1].style.transform = `translateY(-${Math.ceil(
            height2 / 25
          )}px)`;
          main[2].children[0].children[0].style.opacity = 0;

          main[3].children[0].children[0].style.transform = `translateY(-${
            (height3 * 2) / 2
          }px)`;
          main[3].children[0].children[1].style.transform = `translateY(-${Math.ceil(
            height3 / 25
          )}px)`;
          main[3].children[0].children[0].style.opacity = 0;

          main[4].children[0].style.transform = `translateY(-${height3 / 2}px)`;
          main[4].children[0].style.opacity = 0;

          window.addEventListener("scroll", transitionProjects, false);
        }
      },
      false
    );

    if (mobile === false) {
      window.addEventListener("scroll", transitionProjects, false);
    } else {
      const main = document.getElementsByClassName("tes")[0].children;

      main[0].children[0].removeAttribute("style");
      main[1].children[0].children[0].removeAttribute("style");
      main[1].children[0].children[1].removeAttribute("style");
      main[2].children[0].children[0].removeAttribute("style");
      main[2].children[0].children[1].removeAttribute("style");
      main[3].children[0].children[0].removeAttribute("style");
      main[3].children[0].children[1].removeAttribute("style");
      main[4].children[0].removeAttribute("style");

      window.removeEventListener("scroll", transitionProjects, false);
    }

    const main = document.getElementsByClassName("tes")[0].children;
    const height = main[1].clientHeight;
    const height2 = main[2].clientHeight;
    const height3 = main[3].clientHeight;

    main[1].children[0].children[0].style.transform = `translateY(-${
      (height * 2) / 2
    }px)`;
    main[1].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height / 25
    )}px)`;
    main[1].children[0].children[0].style.opacity = 0;

    main[2].children[0].children[0].style.transform = `translateY(-${
      (height2 * 2) / 2
    }px)`;
    main[2].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height2 / 25
    )}px)`;
    main[2].children[0].children[0].style.opacity = 0;

    main[3].children[0].children[0].style.transform = `translateY(-${
      (height3 * 2) / 2
    }px)`;
    main[3].children[0].children[1].style.transform = `translateY(-${Math.ceil(
      height3 / 25
    )}px)`;
    main[3].children[0].children[0].style.opacity = 0;

    main[4].children[0].style.transform = `translateY(-${height3 / 2}px)`;
    main[4].children[0].style.opacity = 0;
    return () => {
      window.removeEventListener("scroll", transitionProjects, false);
    }
  }, []);

  return (
    <MainLayout pageTitle="Projects">
      <NavScroll topTitle="Info" topLink="about" backTop={true} mobile="next" />
      <section id={styles.projects} className="tes">
        <div ref={contentRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* <TextSection
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectSection link="/" title="Jessica Watson" image={data.jessica} />
        <ProjectSection link="/" title="suri-ram" image={data.nursery} />
        <ProjectSection link="/" title="Nautilus" image={data.nautilus} /> */}
        <div>
          <Link to="/">
            <div>
              <span>Jessica Watson</span>
            </div>
            <div>
              <StaticImage
                src="../images/jessica watson_final.webp"
                alt="Jessica Watson"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>suri-ram</span>
            </div>
            <div>
              <StaticImage
                src="../images/Nursery_1.webp"
                alt="Suri-Ram"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div>
              <span>Nautilus</span>
            </div>
            <div>
              <StaticImage
                src="../images/nautilus.webp"
                alt="Nautilus"
                placeholder="blurred"
                loading="eager"
                objectFit="contain"
                style={{ maxHeight: "100%" }}
                onMouseEnter={() => context.cursorChangeHandler("hovered")}
                onMouseLeave={() => context.cursorChangeHandler("")}
              />
            </div>
          </Link>
        </div>
        <div>
          <p>©2020 Kathrin Honesta.</p>
        </div>
        {/* <TextSection content="©2020 Kathrin Honesta." /> */}
      </section>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    jessica: file(relativePath: { eq: "jessica watson_final.webp" }) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: BLURRED)
      }
    }
    nautilus: file(relativePath: { eq: "nautilus.webp" }) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: BLURRED)
      }
    }
    nursery: file(relativePath: { eq: "Nursery_1.webp" }) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: BLURRED)
      }
    }
  }
`;

export default ProjectsPage;
