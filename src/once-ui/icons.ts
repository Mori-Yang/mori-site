import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiArrowUpRight,
  HiOutlineArrowPath,
  HiCheck,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineLink,
  HiExclamationTriangle,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiMiniGlobeAsiaAustralia,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiClipboard,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { FaBluesky, FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoWechat } from 'react-icons/io5'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import {
  HTML5, CSS, JavaScript, TypeScript, Less, Sass,
  React, VueJs, Pinia, ReactRouter, TailwindCSS, Spring,
  Webpack, ViteJS, Babel, ESLint, Docker, NPM,
  VisualStudioCode, NodeJs, PnpmDarkWordmark
} from "developer-icons"
export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  arrowUpRight: HiArrowUpRight,
  check: HiCheck,
  arrowRight: HiArrowRight,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  email: HiEnvelope,
  globe: HiMiniGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  clipboard: HiClipboard,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  bluesky: FaBluesky,
  wechat: IoLogoWechat,
  light: BsSunFill,
  dark: BsFillMoonStarsFill,
};

export const techIcons = [HTML5, CSS, JavaScript, TypeScript, NodeJs, React, VueJs, Pinia, ReactRouter, VisualStudioCode]
export const techIcons2 = [Webpack, ViteJS, NPM, ESLint, Babel, Less, Sass, TailwindCSS, Docker, PnpmDarkWordmark]
