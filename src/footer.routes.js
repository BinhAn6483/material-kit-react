// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

export default {
  brand: {
    name: "Navigation Web",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.youtube.com/watch?v=l8wSgsWYc7c",
    },
    {
      icon: <TwitterIcon />,
      link: "https://www.youtube.com/watch?v=l8wSgsWYc7c",
    },
    {
      icon: <GitHubIcon />,
      link: "https://www.youtube.com/watch?v=l8wSgsWYc7c",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/watch?v=l8wSgsWYc7c",
    },
  ],
  menus: [
    {
      name: "Hỗ trợ khách hàng",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "Luật",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Trong trường hợp.
    </MKTypography>
  ),
};
