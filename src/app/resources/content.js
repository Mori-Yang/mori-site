import { Flex, InlineCode } from "@/once-ui/components";
import { techIcons, techIcons2 } from "@/once-ui/icons";
import { FaLink, FaUnderline } from "react-icons/fa6";

const person = {
  firstName: "Mori",
  lastName: "Yang",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "FE Developer",
  avatar: "/images/avatar.png",
  location: "Asia/China",
  languages: ["Chinese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mori-Yang",
  },
  {
    name: "Bluesky",
    icon: "bluesky",
    link: "https://bsky.app/profile/mori-yang.bsky.social",
  },
  {
    name: "WeChat",
    icon: 'wechat',
    value: ": ys5-14",
  },
  {
    name: "Discord",
    icon: "discord",
    value: ": mori_y",
  },
  {
    name: "Email",
    icon: "email",
    value: ": ys0514@yeah.net",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Site`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>
    <p>Mori</p>
    <p><InlineCode>{"<FE Engineer/>"}</InlineCode></p>
  </>,
  subline: (
    <>
      I'm a Front-end Engineer from China 🇨🇳<br />
      🌟 I love open source, love exploration, and hope to improve myself from it
    </>
  ),
};

const age = new Date().getFullYear() - 2000;

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I am a <InlineCode>{age}</InlineCode> year old front-end developer, familiar with popular web technologies, familiar with React and other kinds of front-end frameworks and principles,
          back-end also have a little experience.
        </p>
        <Flex gap="4">
          {
            techIcons.map((icon) => (icon({ size: 36 })))
          }
        </Flex>
        <Flex gap="4">
          {
            techIcons2.map((icon) => (icon({ size: 36 })))
          }
        </Flex>
        <p>
          <InlineCode>New York is 3 hours ahead of California,</InlineCode>
          <InlineCode>but it does not make California slow.</InlineCode>
          <InlineCode>Everyone is running their own RACE, in their own TIME.</InlineCode>
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ByteDance Toutiao",
        timeframe: "2025.7 - Present",
        role: "Front-end developer",
        achievements: [],
        images: [],
      },
      {
        company: "Tencent Wechat",
        timeframe: "2024.5 - 2024.9",
        role: "Front-end development intern",
        achievements: [],
        images: [],
      },
      {
        company: "Alibaba HelloBike",
        timeframe: "2023.7 - 2023.10",
        role: "Front-end development intern",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Wuhan University of Science and Technology",
        description: <>Master's Degrees.Studied Computer Technology.</>,
      },
      {
        name: "Wuhan University of Science and Technology",
        description: <>Bachelor's Degree.Graduate DegreeStudied Network Security.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "R",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
