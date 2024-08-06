import { FacebookIcon } from "../icons/svg/FacebookIcon";
import { InstagramIcon, InstagramIcon2 } from "../icons/svg/InstagramIcon.jsx";
import { LinkedinIcon } from "../icons/svg/LinkedinIcon.jsx";
import { GithubIcon } from "../icons/svg/GithubIcon.jsx";
import { YoutubeIcon, YoutubeIconCircle } from "../icons/svg/YoutubeIcon.jsx";
import { XIcon } from "../icons/svg/XIcon.jsx";

function socialmedia(label, href, icon, visibilidad) {
  const iconStyle =
    "transition duration-300 ease-in-out transform hover:scale-110";

  return (
    visibilidad && (
      <li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label={label}
          href={href}
          className={iconStyle}
        >
          {icon}
        </a>
      </li>
    )
  );
}

export function SocialMediaIcon({
  FB = false,
  IG = false,
  LI = false,
  GH = false,
  YT = false,
  X = false,
}) {
  return (
    <ul className="flex flex-row items-center gap-x-2">
      {socialmedia(
        "Facebook de Codenity, se abrirá en una nueva pestaña",
        "https://www.facebook.com/codenity19",
        <FacebookIcon width={48} height={48} fill="white" />,
        FB
      )}
      {socialmedia(
        "Instagram de Codenity, se abrirá en una nueva pestaña",
        "https://www.instagram.com/codenity1/",
        <InstagramIcon width={48} height={48} fill="white" />,
        IG
      )}
      {socialmedia(
        "Youtube de Codenity, se abrirá en una nueva pestaña",
        "https://www.youtube.com/@codenity9515",
        <YoutubeIcon width={48} height={48} fill="white" />,
        YT
      )}
      {socialmedia(
        "GitHub de Codenity, se abrirá en una nueva pestaña",
        "https://github.com/CodenityOrg",
        <GithubIcon width={48} height={48} fill="white" />,
        GH
      )}
      {socialmedia(
        "Linkedin de Codenity, se abrirá en una nueva pestaña",
        "https://www.linkedin.com/company/codenity-org/",
        <LinkedinIcon width={48} height={48} fill="white" />,
        LI
      )}
      {socialmedia(
        "X de Codenity, se abrirá en una nueva pestaña",
        "https://x.com/Codenity19",
        <XIcon width={47} height={47} fill="white" />,
        X
      )}
    </ul>
  );
}

/*
<li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label="Instagram de Codenity, se abrirá en una nueva pestaña"
          href="https://www.instagram.com/codenity1/"
          className={iconStyle}
        >
          <InstagramIcon width={48} height={48} fill="white" />
        </a>
      </li>
      <li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label="GitHub de Codenity, se abrirá en una nueva pestaña"
          href="https://github.com/CodenityOrg"
          className={iconStyle}
        >
          <GithubIcon width={48} height={48} fill="white" />
        </a>
      </li>
      <li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label="Linkedin de Codenity, se abrirá en una nueva pestaña"
          href="https://www.linkedin.com/company/codenity-org/"
          className={iconStyle}
        >
          <LinkedinIcon width={48} height={48} fill="white" />
        </a>
      </li>
      <li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label="Youtube de Codenity, se abrirá en una nueva pestaña"
          href="https://www.youtube.com/@codenity9515"
        >
          <YoutubeIcon width={48} height={48} fill="white" />
        </a>
      </li>
      <li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label="Facebook de Codenity, se abrirá en una nueva pestaña"
          href="https://www.facebook.com/codenity19"
          className={iconStyle}
        >
          <FacebookIcon width={48} height={48} fill="white" />
        </a>
      </li>
      <li className={iconStyle}>
        <a
          target="_blank"
          rel="noopener"
          aria-label="X de Codenity, se abrirá en una nueva pestaña"
          href="https://x.com/Codenity19"
          className={iconStyle}
        >
          <XIcon width={47} height={47} fill="white" />
        </a>
      </li>
*/
