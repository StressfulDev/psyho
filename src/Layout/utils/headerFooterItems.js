import facebook from "../../assets/img/icons/HeaderIcons/facebook.svg";
import instagram from "../../assets/img/icons/HeaderIcons/instagram.svg";
import telegram from "../../assets/img/icons/HeaderIcons/telegram.svg";
import youtube from "../../assets/img/icons/HeaderIcons/youtube.svg";

export const HEADER_ITEMS = [
  {
    link: "about",
    name: "О канале",
  },
  {
    link: "photo",
    name: "Фото",
  },
  {
    link: "video",
    name: "Видео",
  },
  {
    link: "telegram",
    name: "События",
  },
  {
    link: "contacts",
    name: "Контакты",
  },
  {
    link: "/privacy-policy",
    name: "Политика конфиденциальности",
    footer: true,
    tablet: true,
  },
];

export const HEADER_LINKS = [
  {
    link: "/privacy-policy",
    name: "Политика конфиденциальности",
    footer: true,
    tablet: true,
  },
  {
    icon: facebook,
    link: "/facebook",
    name: "facebook",
  },
  {
    icon: instagram,
    link: "/instagram",
    name: "instagram",
  },
  {
    icon: telegram,
    link: "/telegram",
    name: "telegram",
  },
  {
    icon: youtube,
    link: "/youtube",
    name: "youtube",
  },
];
