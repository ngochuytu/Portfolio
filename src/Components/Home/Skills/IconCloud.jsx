import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import JavaScriptIcon from "simple-icons/icons/javascript";
import Html5Icon from "simple-icons/icons/html5";
import Css3Icon from "simple-icons/icons/css3";
import ReactJsIcon from "simple-icons/icons/react";
import FirebaseIcon from "simple-icons/icons/firebase";
import GithubIcon from "simple-icons/icons/github";
import GitIcon from "simple-icons/icons/git";
import SassIcon from "simple-icons/icons/sass";
import NpmIcon from "simple-icons/icons/npm";

const icons = [
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  ReactJsIcon,
  FirebaseIcon,
  GithubIcon,
  GitIcon,
  SassIcon,
  NpmIcon,
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  ReactJsIcon,
  FirebaseIcon,
  GithubIcon,
  GitIcon,
  SassIcon,
  NpmIcon,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 100,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

//Remove library default canvas' style
const canvasProps = {
  style: {},
};

function IconCloud() {
  return (
    <Cloud
      options={{
        clickToFront: 500,
        depth: 0.5,
        initial: [0.1, -0.1],
        wheelZoom: false,
      }}
      canvasProps={canvasProps}
    >
      {icons}
    </Cloud>
  );
}

export default IconCloud;
