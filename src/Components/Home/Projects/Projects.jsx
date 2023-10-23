import React from "react";
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import Project from "./Project";
import FacebookCloneDemoVideo from "../../../Assets/Videos/Home/Projects/FacebookClone/FacebookCloneDemo.mp4";
import FacebookThumbImage from "../../../Assets/Images/Home/Projects/FacebookClone/FacebookCloneThumb.png";
import ShoesStoreDemoVideo from "../../../Assets/Videos/Home/Projects/ShoesStore/ShoesStoreDemo.mp4";
import ShoesStoreThumbImage from "../../../Assets/Images/Home/Projects/ShoesStore/ShoesStoreThumb.png";
import MusicPlayerDemoVideo from "../../../Assets/Videos/Home/Projects/MusicPlayer/MusicPlayerDemo.mp4";
import MusicPlayerThumbImage from "../../../Assets/Images/Home/Projects/MusicPlayer/MusicPlayerThumb.png";
import ProjectPaginationLibrary from "./Library/ProjectPaginationLibrary";

const multiLanguageContent = {
  en: {
    projects: [
      {
        header: "Project",
        title: "Facebook Clone",
        description:
          "Building Facebook Application using ReactJS and Firebase, this build recreated the basic functionality (sign up, log in, CRUD posts, real-time notifications, …) of the original Facebook.",
        demoLinkTitle: "Visit website",
        demoLink: "https://facebook-clone-source.vercel.app/",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/facebook-clone-source",
        demoVideo: FacebookCloneDemoVideo,
        thumbImage: FacebookThumbImage,
      },
      {
        header: "Project",
        title: "Shoe Store",
        description:
          "An online shoe store E-commerce using Asp.net WebForm. Functionalities include: Sign up, log in, adding product to cart, searching for products",
        demoLinkTitle: "Visit website",
        demoLink: "http://shoe-store.somee.com/",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/bangiay",
        demoVideo: ShoesStoreDemoVideo,
        thumbImage: ShoesStoreThumbImage,
      },
      {
        header: "Project",
        title: "Music Player",
        description:
          "A basic music player that allows you to go forward, backward, repeat, play randomly, pause a song, add songs to favorite list, set time to stop playing.",
        demoLinkTitle: "Visit website",
        demoLink: "https://ngochuytu.github.io/Music",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/Music",
        demoVideo: MusicPlayerDemoVideo,
        thumbImage: MusicPlayerThumbImage,
      },
      {
        header: "Library",
        title: "React Pagination",
        description: "ReactJS component to render a pagination.",
        demoLinkTitle: "NPM",
        demoLink: "https://www.npmjs.com/package/@ngochuytu/react-pagination",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/react-pagination",
        customRightContent: <ProjectPaginationLibrary />,
      },
    ],
  },
  vn: {
    projects: [
      {
        header: "Dự án",
        title: "Facebook Clone",
        description:
          "Website clone Facebook sử dụng ReactJS và Firebase với các chức năng cơ bản (đăng kí, đăng nhập, CRUD bài viết, thông báo thời gian thực).",
        demoLinkTitle: "Xem trực tiếp",
        demoLink: "https://facebook-8e6fc.web.app/",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/facebook-clone-source",
        demoVideo: FacebookCloneDemoVideo,
        thumbImage: FacebookThumbImage,
      },
      {
        header: "Dự án",
        title: "Cửa hàng bán giày",
        description:
          "Website bán giày sử dụng Asp.net WebForms với các chức năng: Đăng kí, đăng nhập, giỏ hàng, tìm kiếm sản phẩm, lọc sản phẩm...",
        demoLinkTitle: "Xem trực tiếp",
        demoLink: "http://bangiay.somee.com/",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/bangiay",
        demoVideo: ShoesStoreDemoVideo,
        thumbImage: ShoesStoreThumbImage,
      },
      {
        header: "Dự án",
        title: "Music Player",
        description:
          "Trình phát nhạc đơn giản cho phép bạn nghe nhạc, tìm kiếm, thêm vào danh sách yêu thích, hẹn giờ phát",
        demoLinkTitle: "Xem trực tiếp",
        demoLink: "https://ngochuytu.github.io/Music",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/Music",
        demoVideo: MusicPlayerDemoVideo,
        thumbImage: MusicPlayerThumbImage,
      },
      {
        header: "Thư viện",
        title: "React Pagination",
        description: "Thư viện ReactJS dùng để render component phân trang",
        demoLinkTitle: "NPM",
        demoLink: "https://www.npmjs.com/package/@ngochuytu/react-pagination",
        githubLinkTitle: "Github",
        githubLink: "https://github.com/ngochuytu/react-pagination",
        customRightContent: <ProjectPaginationLibrary />,
      },
    ],
  },
};

function Projects() {
  const {
    settings: { language },
  } = useSettingsContext();

  const projects = multiLanguageContent[language].projects;

  return (
    <>
      {projects.map((project) => (
        <Project
          key={project.githubLink}
          projectHeader={project.header}
          projectTitle={project.title}
          projectDescription={project.description}
          projectDemoLinkTitle={project.demoLinkTitle}
          projectDemoLink={project.demoLink}
          projectGithubLinkTitle={project.githubLinkTitle}
          projectGithubLink={project.githubLink}
          projectDemoVideo={project.demoVideo}
          projectThumbImage={project.thumbImage}
          customRightContent={project.customRightContent}
        />
      ))}
    </>
  );
}

export default Projects;
