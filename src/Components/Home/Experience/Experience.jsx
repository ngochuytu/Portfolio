import React from "react";
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceTitle,
  RoadMapSvg,
} from "./Experience.style";
import ExperienceItems from "./ExperienceItems";

const multiLanguageContent = {
  en: {
    title: "Experience",
  },
  vn: {
    title: "Kinh nghiệm",
  },
};

const Experience = () => {
  const {
    settings: { language, theme },
  } = useSettingsContext();
  return (
    <ExperienceContainer>
      <ExperienceTitle tabIndex={0}>
        {multiLanguageContent[language].title}
      </ExperienceTitle>
      <ExperienceContent>
        <RoadMapSvg
          width="540"
          height="1639"
          viewBox="0 0 540 1639"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="t"
            d="M176 83.5L319.278 303.859C425.131 466.66 409.114 680.129 280.153 825.311V825.311C131.565 992.588 135.591 1245.72 289.423 1408.19L498.5 1629"
            stroke="url(#paint0_linear_174_239)"
            strokeDasharray="1 17"
          />
          <path
            id="g"
            d="M171 70.5L252.63 255.571C267.071 288.311 285.743 319.017 308.168 346.902V346.902C417.094 482.345 428.6 671.811 336.864 819.44L302.538 874.681L268.841 918.943C169.838 1048.98 178.853 1231.42 290.195 1351.07V1351.07C301.792 1363.53 312.424 1376.85 322 1390.93L485 1630.5"
            stroke="url(#paint1_linear_174_239)"
            strokeDasharray="1 17"
          />
          <path
            id="r"
            d="M112.539 103L299.987 296.89V296.89C422.518 455.324 415.538 678.385 283.341 828.849L269.952 844.088L251.622 869.699C148.643 1013.59 149.804 1207.36 254.5 1350V1350L436.5 1611.5"
            stroke="url(#paint2_linear_174_239)"
            strokeDasharray="1 17"
          />
          <path
            id="l"
            d="M138 89.5L285.18 271.862C417.141 435.368 410.182 670.668 268.79 826.09V826.09C117.829 992.03 121.422 1246.61 277.007 1408.22L478 1617"
            stroke="url(#paint3_linear_174_239)"
            strokeDasharray="1 17"
          />
          <path
            id="p"
            d="M150 73.5L248.832 259.39C265.765 291.239 287.518 320.28 313.321 345.486V345.486C431.061 460.503 452.797 641.999 365.545 781.566L326.999 843.224C310.8 869.135 290.486 892.232 266.854 911.606V911.606C132.1 1022.08 129.271 1227.28 260.928 1341.42L281.505 1359.26C298.856 1374.31 314.447 1391.27 327.981 1409.82L491.5 1634"
            stroke="url(#paint4_linear_174_239)"
            strokeDasharray="1 17"
          />
          <path
            id="x"
            d="M182.5 69L279.608 265.681C293.299 293.412 310.508 319.261 330.809 342.592V342.592C450.224 479.827 448.443 684.597 326.66 819.734L270.231 882.351V882.351C162.583 1022.03 158.946 1215.67 261.273 1359.29L277.385 1381.9L468.5 1638"
            stroke="url(#paint5_linear_174_239)"
            strokeDasharray="1 17"
          />
          <defs>
            <linearGradient
              id="paint0_linear_174_239"
              x1="294"
              y1="20"
              x2="294"
              y2="1580"
              gradientUnits="userSpaceOnUse"
            >
              {theme === "light" ? (
                <>
                  <stop stopColor="#000000" />
                  <stop offset="1" stopColor="#000000" />
                </>
              ) : (
                <>
                  <stop stopColor="#7941F3" />
                  <stop offset="1" stopColor="#5B22D6" />
                </>
              )}
            </linearGradient>
            <linearGradient
              id="paint1_linear_174_239"
              x1="294"
              y1="20"
              x2="294"
              y2="1580"
              gradientUnits="userSpaceOnUse"
            >
              {theme === "light" ? (
                <>
                  <stop stopColor="#000000" />
                  <stop offset="1" stopColor="#000000" />
                </>
              ) : (
                <>
                  <stop stopColor="#3A88FD" />
                  <stop offset="1" stopOpacity="0.2" />
                </>
              )}
            </linearGradient>
            <linearGradient
              id="paint2_linear_174_239"
              x1="293.749"
              y1="23.2905"
              x2="293.749"
              y2="1521.44"
              gradientUnits="userSpaceOnUse"
            >
              {theme === "light" ? (
                <>
                  <stop stopColor="#000000" />
                  <stop offset="1" stopColor="#000000" />
                </>
              ) : (
                <>
                  <stop stopOpacity="0.2" />
                  <stop offset="1" stopColor="#6FDFF7" />
                </>
              )}
            </linearGradient>
            <linearGradient
              id="paint3_linear_174_239"
              x1="294"
              y1="20"
              x2="294"
              y2="1594"
              gradientUnits="userSpaceOnUse"
            >
              {theme === "light" ? (
                <>
                  <stop stopColor="#000000" />
                  <stop offset="1" stopColor="#000000" />
                </>
              ) : (
                <>
                  <stop stopColor="#7941F3" />
                  <stop offset="1" stopColor="#5B22D6" />
                </>
              )}
            </linearGradient>
            <linearGradient
              id="paint4_linear_174_239"
              x1="294"
              y1="20"
              x2="294"
              y2="1594"
              gradientUnits="userSpaceOnUse"
            >
              {theme === "light" ? (
                <>
                  <stop stopColor="#000000" />
                  <stop offset="1" stopColor="#000000" />
                </>
              ) : (
                <>
                  <stop stopColor="#3A88FD" />
                  <stop offset="1" stopOpacity="0.2" />
                </>
              )}
            </linearGradient>
            <linearGradient
              id="paint5_linear_174_239"
              x1="294"
              y1="20"
              x2="294"
              y2="1594"
              gradientUnits="userSpaceOnUse"
            >
              {theme === "light" ? (
                <>
                  <stop stopColor="#000000" />
                  <stop offset="1" stopColor="#000000" />
                </>
              ) : (
                <>
                  <stop stopOpacity="0.2" />
                  <stop offset="1" stopColor="#6FDFF7" />
                </>
              )}
            </linearGradient>
          </defs>
        </RoadMapSvg>
        <ExperienceItems />
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
