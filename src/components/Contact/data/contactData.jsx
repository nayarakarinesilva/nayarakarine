import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const contactData = [
  {
    id: "email",
    icon: <EmailOutlinedIcon style={{ color: "#910a67" }} fontSize="small" />,
    description: "nayarakarine.@gmail.com",
    link: "mailto:nayarakarine@gmail.com",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon style={{ color: "#910a67" }} fontSize="small" />,
    description: "linkedin.com/in/nayarakarine",
    link: "https://www.linkedin.com/in/nayarakarine-silva/",
  },
  {
    id: "github",
    icon: <GitHubIcon style={{ color: "#910a67" }} fontSize="small" />,
    description: "github.com/nayarakarinesilva",
    link: "https://github.com/nayarakarinesilva",
  },
  {
    id: "address",
    icon: (
      <LocationOnOutlinedIcon style={{ color: "#910a67" }} fontSize="small" />
    ),
    description: "Campinas, SP - Brasil",
  },
];
