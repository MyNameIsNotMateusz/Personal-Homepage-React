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
        url: "https://pl.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F",
        Icon: styleIcon(LinkedInIcon),
    },
];
