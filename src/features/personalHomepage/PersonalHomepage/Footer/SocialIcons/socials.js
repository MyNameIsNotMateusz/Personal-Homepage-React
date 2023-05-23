import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/MyNameIsNotMateusz",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/mateusz.otorowski/",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mateusz-otorowski-28721b278/",
        Icon: styleIcon(LinkedInIcon),
    },
];
